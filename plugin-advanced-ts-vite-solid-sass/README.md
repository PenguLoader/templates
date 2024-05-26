# plugin-advanced-vite-solid-sass
Example template that shows how to use [Vite template](../plugin-advanced-ts-vite/) with [SolidJS](https://solidjs.com/) and [SASS](https://sass-lang.com/).

Useful for developing advanced plugins that makes use of complex elements and a lot of CSS.

> [!IMPORTANT]
> Don't forget to change path to your Pengu Loader folder in package.json!

## Building
Same as in base Vite template: run `npm run build` and it will spit everything in `dist/` folder.

## Hot Module Replacement
Vite's HMR allows us to change SolidJS components without refreshing the page.
You can try it yourself by changing stuff around by chaning [Test component's source code](./src/components/test.tsx#L29-L32).
To use HMR run `npm run dev`.
