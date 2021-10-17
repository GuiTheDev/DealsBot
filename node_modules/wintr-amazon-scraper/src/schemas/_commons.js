const { constants } = require('wintr')

const fractionatedPriceSchema = {
  priceWhole: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.a-price-whole',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*'
  },
  priceFraction: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.a-price-fraction',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*'
  },
  priceSymbol: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.a-price-symbol',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*'
  }
}

module.exports = { fractionatedPriceSchema }
