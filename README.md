# Templates
Official plugin templates for Pengu Loader.

## [plugin-base](plugin-base)
The simplest plugin template there could possible be.
Should only be used for an extremely simple plugin.

## [plugin-simple-ts-pkgroll](plugin-simple-ts-pkgroll)
Template that uses simplest bundler there is. [pkgroll](https://github.com/privatenumber/pkgroll) has no configuration which means there is less headache but also that its pretty limited.
For example: it doesn't support any assets (including CSS), and doesn't have neither live refresh nor hot module replacement.
It does however have a watch mode, but it is very basic. 

## [plugin-simple-ts-esbuild](plugin-simple-ts-esbuild)
A simple template using [ESBuild](https://esbuild.github.io/). Supports various assets (including CSS) and now provides Live Refresh, that automatically builds your plugin, places it in your Pengu folder, and reloads LCU on file changes.

## [plugin-simple-ts-tsup](plugin-simple-ts-tsup)
Uses [tsup](https://tsup.egoist.dev) which uses [ESBuild](https://esbuild.github.io/) under the hood so its effectively the same as [ESBuild template](#plugin-simple-ts-esbuild), which makes it more easier and maintainable.

## [plugin-advanced-ts-vite](plugin-advanced-ts-vite) (Recommended)
Recommended way to develop plugins for Pengu.
This template uses a powerful bundler [Vite](https://vitejs.dev/) which has a very flexible plugins system and a huge community of developers.
Also has the best Hot Module Replacement feature, making developer experience faster and smoother.

## [plugin-advanced-ts-vite-solid-sass](plugin-advanced-ts-vite-solid-sass)
Example template that shows how to use [Vite template](#plugin-advanced-ts-vite) with [SolidJS](https://solidjs.com/) and [SASS](https://sass-lang.com/).


# Usage
All of the templates that use bundlers are preconfigured to two commands:

### Build
```bash
npm run build
```
This command will take all your source code from ./src/ directory, process it and output to ./dist/ folder.

### Live Refresh / Hot Module Replacement
```bash
npm run dev
```
This command will enable live refresh/HMR (depending on template) and let you significantly accelerate development.

How exactly it works depends on a bundler, so refer to your template's README.md.

# Defines
All of the templates that use bundlers provide 3 defines that you can use to distinguish between different environments.

`process.env.ENV` is either `development` or `production`.

`process.env.DEV` is set to true in development mode, otherwise it is undefined.

`process.env.PROD` is similarly set to true in production mode, otherwise it is undefined.
