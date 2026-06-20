import { cpSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';

mkdirSync('./d/converted', { recursive: true });
cpSync('./d/scripts', './d/converted/', { recursive: true, force: true });
execSync('npx indentier --write ./d/converted/ --mode ruby', { stdio: 'inherit' });
