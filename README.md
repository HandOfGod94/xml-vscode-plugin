# xml-vscode-plugin

> I started this project when there was no XML Plugin available for VSCode.
> But now we have XML Plugin by RedHat available, so I recommend all to use that.
> Do check em out: https://github.com/angelozerr/lsp4xml, https://github.com/redhat-developer/vscode-xml   
> Meanwhile, I will try my best to improve and new features to this project, but not having the freedom
> to dedicate time for it may take a bit longer to finish it.

VSCode plugin for XML language. This is an LSP Client which uses `xml-language-server`
to provide features such as autocomplete, validation and documentation for XML languages.

## Features
* XML Validations
  - [x] XSD
  - [ ] DTD
* Autocomplete
  - [x] XSD
  - [ ] DTD
* Documentation
  - [x] XSD
  - [ ] DTD

> Refer to `xml-language-server` repository for updated info on features.

## What is language client?

Language client is the client part of Language Server Protocol (LSP), which asks server for the required data/operations.  
As per official documentation,
> The Language Server protocol is used between a tool (the client) and a language smartness provider (the server) 
> to integrate features like auto complete, go to definition, find all references and alike into the tool.

## Why XML?
We use XML documents, configs extensively for our day to day work, and simple config typo of elements or attributes
breaks our head for hours. `Intellij` was already supporting features for XML such as **validation, autocomplete,
documentation (using annotations from xsd)**, but text editors like `vscode` or `sublime` doesn't have support for XML.
It's an attempt to make editors smart for XML documents.

## Build
The `jar` from `xml-language-server` should be put in `jars` folder for it to work.
```shell
vsce package # to create .vsix extension
```

> Currently it requires java to be installed on the host machine for extension to work
> because language server is written in java. In future, this might changes.
