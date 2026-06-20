import { readdirSync } from 'fs';
import { execSync } from 'child_process';
import chalk from 'chalk';
import { consola } from 'consola';

const files = readdirSync('./demo/origin').sort();

consola.box('変換前ファイルを実行');

for (const file of files) {
  const ext = file.split('.').pop();
  const cmd = ext === 'coffee'
    ? `npx coffee ./demo/origin/${file}`
    : `node ./demo/origin/${file}`;

  consola.start(chalk.cyan(`${file}`));
  try {
    const output = execSync(cmd, { encoding: 'utf8' }).trimEnd();
    for (const line of output.split('\n')) {
      consola.log('  ' + chalk.white(line));
    }
    consola.success(chalk.green('完了'));
  } catch (e) {
    consola.error(chalk.red(e.message));
  }
  console.log();
}
