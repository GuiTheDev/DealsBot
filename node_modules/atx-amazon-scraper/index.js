#!/usr/bin/env node

/*
 *cli-scraper
 *A simple cli for web-scrapping
 *
 * @author atxpaul <https://twitter.com/code4paul>
 *
 **/

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const generate = require('./utils/generate');
const storer = require('./utils/storer');
const select = require('./utils/select');
const ora = require('ora');

const spinner = ora({ text: '' });
const input = cli.input;
const flags = cli.flags;
const { clear, debug, minimal, always } = flags;

//IIFE
(async () => {
  init({ clear, minimal });
  input.includes('help') && cli.showHelp(0);
  //console.log(input, input[0].includes(`amazon.es`));

  //COMMAND: check -> Scrap all items, just scrap and show, not notice if any changes
  if (input.includes(`check`) || input.includes(`ls`)) {
    const allUrl = await storer.findAllUrls();
    if (allUrl.length > 0) {
      spinner.start(`Checking if there is any change`);
      for (i = 0; i < allUrl.length; i++) {
        await generate(allUrl[i], always);
      }
      spinner.succeed(
        `Finished. If any article has changed price, it is shown above`
      );
    } else {
      console.log(
        `You cannot check any articles if you don't search for any of them before`
      );
    }
    process.exit(0);
  }

  //COMMAND: ToDo del
  if (input.includes(`del`) || input.includes(`rm`)) {
    const allUrl = await storer.findAllTitles();
    const toDels = await select({ choices: allUrl, message: `Remove item` });
    toDels.map((articleTitle) => storer.deleteArticle(articleTitle));
    console.log(`${toDels.length} articles were removed`);
    process.exit(0);
  }

  //Search for URL
  if (input[0]) {
    await generate(input[0]);
  } else {
    await generate('');
  }

  debug && log(flags, input);
})();
