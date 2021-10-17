const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear = true, minimal = false }) => {
  unhandled();
  !minimal &&
    welcome({
      title: 'cli-scraper',
      tagLine: 'by atxpaul',
      description: pkg.description,
      version: pkg.version,
      bgColor: '#6cc24a',
      color: '#000000',
      bold: true,
      clear,
    });
};
