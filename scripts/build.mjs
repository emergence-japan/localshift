import { copyFile, mkdir, readdir, lstat, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
const files = ['index.html', 'style.css', 'site.js', 'favicon.svg', '関西リレーションズロゴ.jpeg'];

// Copy only public site files, never the source documents or local archives.
for (const entry of await readdir(join(root, '1024tosatosake'), { withFileTypes: true })) {
  if (entry.isFile() && /\.jpe?g$/i.test(entry.name)) {
    files.push(join('1024tosatosake', entry.name));
  }
}

const existing = await lstat(output).catch((error) => {
  if (error.code !== 'ENOENT') throw error;
  return null;
});
if (dirname(output) !== resolve(root) || existing?.isSymbolicLink()) {
  throw new Error('The build output must be a directory inside this project.');
}
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of files) {
  const target = join(output, file);
  await mkdir(dirname(target), { recursive: true });
  await copyFile(join(root, file), target);
}
console.log(`Built ${files.length} public files in dist/`);
