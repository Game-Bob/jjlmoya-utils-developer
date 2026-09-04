import { copyFileSync, existsSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const sourceRoot = resolve('dist/mfe-sitemaps');
const destinationRoot = resolve('dist/_utilities');

if (existsSync(sourceRoot)) {
    for (const locale of readdirSync(sourceRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory())) {
        for (const vertical of readdirSync(join(sourceRoot, locale.name), { withFileTypes: true }).filter((entry) => entry.isDirectory())) {
            const source = join(sourceRoot, locale.name, vertical.name, 'sitemap.xml');
            const destinationDirectory = join(destinationRoot, locale.name, vertical.name);
            mkdirSync(destinationDirectory, { recursive: true });
            copyFileSync(source, join(destinationDirectory, 'sitemap.xml'));
        }
    }
    rmSync(sourceRoot, { recursive: true, force: true });
}
