exports.extractMoney = async (price) => {
  const regex = /[+-]?\d+(\.\d+)?/g;
  const priceString = price.replace(/,/g, '.');
  return parseFloat(priceString.match(regex));
};

exports.extractCurrency = async (price) => {
  const currencySymbol = price
    .match(
      /[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/
    )
    .join('');
  return currencySymbol;
};
