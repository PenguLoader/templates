import { build } from 'esbuild'
import { existsAsync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'

await build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    format: 'esm',
    bundle: true,
    minify: true,
    loader: {
        '.aac': 'file',
        '.eot': 'file',
        '.flac': 'file',
        '.gif': 'file',
        '.jpeg': 'file',
        '.jpg': 'file',
        '.mp3': 'file',
        '.mp4': 'file',
        '.ogg': 'file',
        '.otf': 'file',
        '.png': 'file',
        '.svg': 'file',
        '.ttf': 'file',
        '.wav': 'file',
        '.webm': 'file',
        '.webp': 'file',
        '.woff': 'file',
        '.woff2': 'file',
    },
    define: {
        'process.env.ENV': '"production"',
        'process.env.PROD': 'true',
        'process.env.DEV': 'false'
    }
})

// Insert import "./index.css" at the start of index.js
if (existsAsync(join('dist', 'index.css'))) {
    const indexJsPath = join('dist', 'index.js')
    const indexJs = (await readFile(indexJsPath, 'utf-8'))
        .replace(/^/, 'import "./index.css";');
    await writeFile(indexJsPath, indexJs)
}
