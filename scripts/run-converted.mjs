import { readdirSync } from 'fs';
import { execSync } from 'child_process';
import chalk from 'chalk';
import { consola } from 'consola';

const files = readdirSync('./demo/converted').sort();

consola.box('変換後ファイルを実行');

let allPassed = true;

for (const file of files) {
  const ext = file.split('.').pop();
  const runner = (dir) => ext === 'coffee'
    ? `npx coffee ./demo/${dir}/${file}`
    : `node ./demo/${dir}/${file}`;

  consola.start(chalk.cyan(`${file}`));
  try {
    const originOut = execSync(runner('origin'), { encoding: 'utf8' }).trimEnd();
    const convertedOut = execSync(runner('converted'), { encoding: 'utf8' }).trimEnd();

    for (const line of convertedOut.split('\n')) {
      consola.log('  ' + chalk.white(line));
    }

    if (originOut === convertedOut) {
      consola.success(chalk.green('出力が一致しました ✓'));
    } else {
      allPassed = false;
      consola.fail(chalk.red('出力が一致しません！'));
      consola.log(chalk.yellow('  期待値: ') + chalk.gray(originOut));
      consola.log(chalk.yellow('  実際値: ') + chalk.red(convertedOut));
    }
  } catch (e) {
    allPassed = false;
    consola.error(chalk.red(e.stderr ?? e.message));
  }
  console.log();
}

if (allPassed) {
  consola.success(chalk.bold.green('すべての出力が一致しました！'));
} else {
  consola.error(chalk.bold.red('一致しない出力があります。'));
  process.exit(1);
}
