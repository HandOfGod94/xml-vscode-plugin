"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as path from "path";
import * as os from "os";
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from "vscode-languageclient";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "xml-vscode-plugin" is now active!'
  );

  let xmlServerPath = context.asAbsolutePath(
    path.join(
      "jars",
      "xml-xsd-langserver-1.0-SNAPSHOT-jar-with-dependencies.jar"
    )
  );

  let debugXmlServerPath = path.join(
    os.homedir(),
    '.m2', 'repository', 'io', 'github', 'handofgod94',
    'xml-language-server', '1.0-SNAPSHOT',
    'xml-language-server-1.0-SNAPSHOT-jar-with-dependencies.jar'
  );

  // Server options
  let serverOpts: ServerOptions = {
    run: {
      command: 'java',
      args:[
        '-Djava.util.logging.manager=org.apache.logging.log4j.jul.LogManager',
        '-jar',
        xmlServerPath
      ],
      options: { stdio: 'pipe'},
      transport: TransportKind.ipc,
    },
    debug: {
        command: 'java',
        args: [
            '-Djava.util.logging.manager=org.apache.logging.log4j.jul.LogManager',
            '-jar',
            '-agentlib:jdwp=transport=dt_socket,server=y,suspend=y,quiet=y,address=8010',
            debugXmlServerPath
        ],
        transport: TransportKind.ipc,
    }
  };

  // Client Options
  let clientOpts: LanguageClientOptions = {
      // Register server for jxml
      documentSelector: [{scheme: 'file', language:'xml'}],
      synchronize: {
          fileEvents: vscode.workspace.createFileSystemWatcher('**/*.xml'),
      },
  };

  // Initialize language client
  let languageClient = new LanguageClient('xml', serverOpts, clientOpts);
  let clientDisposable = languageClient.start();

  context.subscriptions.push(clientDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
