const alert = require('atx-alerts');

module.exports = (info) => {
  alert({
    type: `warning`,
    name: `DEBUG LOG`,
    msg: ``,
  });
  console.log(info);
  console.log();
};
