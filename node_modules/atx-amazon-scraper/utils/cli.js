const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
  minimal: {
    type: `boolean`,
    default: false,
    alias: `m`,
    desc: `Do NOT print the welcome header`,
  },
  always: {
    type: `boolean`,
    default: false,
    alias: `a`,
    desc: `Always show results if you are checking, even if price is the same`,
  },
  clear: {
    type: `boolean`,
    default: true,
    alias: `c`,
    desc: `Clear the console`,
  },
  debug: {
    type: `boolean`,
    default: false,
    alias: `d`,
    desc: `Print debug info`,
  },
  version: {
    type: `boolean`,
    default: false,
    alias: `v`,
    desc: `Print CLI info`,
  },
};

const commands = {
  help: {
    desc: `Print help info`,
  },
  check: {
    desc: `Scrap all items storaged`,
  },
  del: {
    desc: `Select an item to remove`,
  },
};

const helpText = meowHelp({
  name: `scrap`,
  flags,
  commands,
});

const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags,
};

module.exports = meow(helpText, options);
