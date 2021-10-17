const { constants } = require('wintr')

/**
 * Wintr output schema for product page
 */
const extractionSchemaForProductPage = {
  product: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_CSS_SELECTOR]: 'body',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_SCHEMA_DESCRIPTOR]: {
      productTitle: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '#productTitle',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TRIM_RESULT
        ]
      },
      categoryChain: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '#wayfinding-breadcrumbs_feature_div a',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TRIM_RESULT
        ]
      },
      featureBullets: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '#feature-bullets ul li',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TRIM_RESULT
        ]
      },
      productDescription: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '#productDescription',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TRIM_RESULT
        ]
      },
      productDetailsHTML: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '#productDetails_feature_div',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*html*'
      },
      price: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '#priceblock_ourprice',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TRIM_RESULT
          // Should have worked ?
          // @todo: Check that/Ask Wintr support about that
          // constants.OUTPUT_SCHEMA_MODIFIERS.TO_NUMBER
        ],
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_REPLACER]: [
          {
            [constants.OUTPUT_SCHEMA_REPLACER.SEARCH]: '$',
            [constants.OUTPUT_SCHEMA_REPLACER.REPLACE_BY]: ''
          },
          {
            [constants.OUTPUT_SCHEMA_REPLACER.SEARCH]: '€',
            [constants.OUTPUT_SCHEMA_REPLACER.REPLACE_BY]: ''
          }
        ]
      },
      sellerName: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '#sellerProfileTriggerId',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*'
      },
      sellerUrl: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '#sellerProfileTriggerId',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'href'
      },
      isOutOfStock: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '#outOfStock',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'id',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_REPLACER]: [
          {
            [constants.OUTPUT_SCHEMA_REPLACER.SEARCH]: 'outOfStock',
            [constants.OUTPUT_SCHEMA_REPLACER.REPLACE_BY]: 'true'
          }
        ]
      },
      imagesPaths: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.image.item img',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'src'
      }
    }
  }
}

module.exports = { extractionSchemaForProductPage }
