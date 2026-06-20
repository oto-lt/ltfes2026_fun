import { cpSync, mkdirSync, rmSync } from 'fs';
import { execSync } from 'child_process';

rmSync('./demo/converted', { recursive: true, force: true });
mkdirSync('./demo/converted', { recursive: true });
cpSync('./demo/origin', './demo/converted/', { recursive: true, force: true });
execSync('npx indentier --write ./demo/converted/ --mode ruby', { stdio: 'inherit' });
