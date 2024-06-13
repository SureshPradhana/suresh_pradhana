---
title: Setting Up Deno's LSP in Neovim
slug: setting-up-deno-lsp-in-neovim
date: 2024-04-26
description: >
   Using Two GitHub Accounts on the Command Line: Configure multiple SSH keys and associate each key with a different GitHub account.
---
Configure Deno LSP in Neovim with `coc.nvim` and `coc-deno` Extension

## Install `coc.nvim`
`coc.nvim` is a language server protocol client for neovim. It provides language support for various languages.

Install `coc.nvim` using your favorite plugin manager. I use `lazy.nvim`, in Lua,for
others
check this [link](https://github.com/neoclide/coc.nvim)
```lua
require('lazy') {
    {'neoclide/coc.nvim', {'branch': 'release'}}
}

```
## Install `coc-deno` extension

coc uses extensions to provide language support. Install the `coc-deno` extension using the following command:
```bash
:CocInstall coc-deno
```
or add it to your `init.lua` file to load the extension on startup:
```vim
vim.g.coc_global_extensions = { 'coc-deno' }

```
you can add your required extensions to the `coc_global_extensions` list.

> link to the deno extension: [coc-deno](https://github.com/fannheyward/coc-deno) and check other extensions [here](https://github-wiki-see.page/m/neoclide/coc.nvim/wiki/Using-coc-extensions)

## Configuration
Just like vscode lsp configuration, you can configure the deno lsp in `coc-settings.json` file. You can open the file using `:CocConfig` command. Add the following configuration to the file:
```json
{
  "deno.enable": true,
  "deno.lint": true,
  "deno.unstable": true,
  "coc.preferences.formatOnSave": true,
  "coc.preferences.enableMessageDialog": true,
  "suggest.floatConfig": {
    "border": true
  },
  "signature.floatConfig": {
    "border": true
  },
  "hover.floatConfig": {
    "border": true
  },
  "svelte.enable-ts-plugin": true,
  "snippets.ultisnips.pythonPrompt": false
}
```

- `deno.enable`: Enable Deno LSP
- `deno.lint`: Enable linting
- `deno.unstable`: Enable unstable features
- `coc.preferences`.formatOnSave: Format on save

the other are optional configurations for float windows and other plugins.

> if `deno.enable` is not set to true, you have to enable it manually using `:CocCommand deno.initilizeWorkspace` command.

## Conclusion
This is how i set up deno lsp in neovim using `coc.nvim` and `coc-deno` extension. for more information check the official documentation of the plugins and extensions.
