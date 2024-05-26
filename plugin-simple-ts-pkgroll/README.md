# plugin-simple-ts-pkgroll
This is a bit more advanced plugin setup than [plugin-base](../plugin-base/) but still relatively simple.
Now it includes a bundler which in exchange of a build step lets you use typescript and all sorts of packages you install using NPM.
It will also minify all your source files(making output way smaller) and bundle it all together to one single index.js file!
It is recommended to use this template if you have a basic plugin where you want to use TypeScript and/or NPM packages, and dont care about good developer experience (due to lack of proper HMR).

> [!IMPORTANT]
> pkgroll only supports javascript and typescript, so you CAN NOT use any assets if you are using this template.

## Building
To build the plugin, run `npm run build`. It will bundle everything and spit it in dist/ folder.

## Watch mode
If you are developing the plugin and don't want to build it every single time you updated something, you can use pkgroll's watch mode. 
Keep in mind that you still will have to move files to plugins/ folder yourself!
To do that just run `npm run dev`.
