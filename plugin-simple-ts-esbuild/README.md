# plugin-simple-ts-esbuild
Now things get interesting! Unlike [pkgroll](../plugin-simple-ts-pkgroll) ESBuild also works with all sort of assets (png, mp4, etc...)
and provides Live Refresh, allowing for a very quick development cycle!

> [!IMPORTANT]
> Don't forget to change path to your Pengu Loader folder in package.json!

## Building
To build the plugin, run `npm run build`. It will bundle everything and spit it in `dist/` folder.

## Live Refresh
Unlike pkgroll, ESBuild provides a basic live refresh in development mode.
However, it does not yet support full Hot Module Replacement (HMR) like Vite,
where changes to CSS or TSX files do not require a complete reload of the client.
It will automagically build your plugin, put it in your Pengu folder and then fully reload LCU every time you change a file.
To do that make sure you specified path to Pengu Loader in package.json and then just run `npm run dev`.
