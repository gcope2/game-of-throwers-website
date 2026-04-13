import { mkdirSync, readdirSync, lstatSync, copyFileSync, existsSync } from 'fs';
import { join } from 'path';

const source = join(process.cwd(), 'images');
const destination = join(process.cwd(), 'public', 'images');

function copyDirectory(src, dest) {
  if (!existsSync(src)) {
    throw new Error(`Source directory does not exist: ${src}`);
  }
  mkdirSync(dest, { recursive: true });

  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);

    if (lstatSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

copyDirectory(source, destination);
