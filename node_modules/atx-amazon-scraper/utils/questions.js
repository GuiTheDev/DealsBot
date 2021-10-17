const ask = require('./ask');

module.exports = async () => {
  const url = await ask({
    name: `url`,
    message: `Amazon URL`,
    hint: `Use any amazon URL`,
  });
  const desiredPrice = await ask({
    name: `desiredPrice`,
    message: `What would you pay?`,
    hint: `Just use numbers`,
  });

  const vars = {
    url,
    desiredPrice,
  };

  return vars;
};
