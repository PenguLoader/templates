import { context } from 'esbuild'
import { resolve, join } from 'node:path'
import { readFile, writeFile, mkdir, readdir, unlink } from 'node:fs/promises'
import { existsSync } from 'node:fs'

// Read package.json and get plugin's path
const pkg = JSON.parse(await readFile('./package.json'))
const path = join(resolve(pkg.config.penguPath), 'plugins', pkg.name)

// Create a folder if doesn't exist, else empty it
if (existsSync(path)) {
    for (const file of await readdir(path)) {
        await unlink(join(path, file));
    }
} else {
    await mkdir(path, { recursive: true });
}

// Build and create a context
const ctx = await context({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    format: 'esm',
    bundle: true,
    define: {
        'process.env.ENV': '"development"',
        'process.env.PROD': 'false',
        'process.env.DEV': 'true'
    }
})

// Serve and get url to work with
const serve = await ctx.serve({
    host: '127.0.0.1'
})
const url = `http://${serve.host}:${serve.port}`

// Prepare proxy index.js file
let indexJS =
    `export * from '${url}/index.js';
    new EventSource('${url}/esbuild').addEventListener('change', () => location.reload());`

// Append loading of CSS if there is index.css
if (existsSync('dist/index.css')) {
    indexJS = indexJS + `
    window.addEventListener('load', () => {
        let link = document.createElement('link');
        link.href = '${url}/index.css';
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    })`
}

// Write our proxy index.js file
await writeFile(resolve(path, 'index.js'), indexJS)

// Finally, watch!
console.log('Watching...')
await ctx.watch()
