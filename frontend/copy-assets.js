// When building, some assets are not copied to the dist folder
// This script copies all the assets from the src folder to the dist folder

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src', 'assets');
const destDir = path.join(__dirname, 'dist', 'assets');

// Copy files from src to dist directory
function copyFiles(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    fs.readdirSync(src).forEach(file => {
        const srcFile = path.join(src, file);
        const destFile = path.join(dest, file);

        if (fs.lstatSync(srcFile).isDirectory()) {
            copyFiles(srcFile, destFile);
        } else {
            fs.copyFileSync(srcFile, destFile);
        }
    });
}

copyFiles(srcDir, destDir);