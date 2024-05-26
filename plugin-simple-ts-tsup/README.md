# plugin-simple-ts-tsup
This template uses tsup which makes use of [esbuild](../plugin-simple-ts-esbuild) under hood, but is way easier and maintainable. Although arguably less configurable. It is way less extensible than Vite but it is a simple solution for those who dont want to bother too much.

> [!IMPORTANT]
> Don't forget to change path to your Pengu Loader folder in package.json!

## Building
To build the plugin, run `npm run build`. It will bundle everything and spit it in dist/ folder.

## Live Refresh
Live refresh in tsup is identical to ESBuild.
You can read about it [here](../plugin-simple-ts-esbuild##Live%20Refresh).
