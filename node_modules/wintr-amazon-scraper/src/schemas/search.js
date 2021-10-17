const { constants } = require('wintr')
const { fractionatedPriceSchema } = require('./_commons')

/**
 * Wintr output schema for search page
 */
const extractionSchemaForSearchPage = {
  hasNextPage: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_CSS_SELECTOR]: 'body',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_SCHEMA_DESCRIPTOR]: {
      link: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.a-pagination .a-selected + .a-normal a',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'href'
      }
    }
  },
  searchResult: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_CSS_SELECTOR]: '.s-result-list.s-search-results span[data-cel-widget="SEARCH_RESULTS-SEARCH_RESULTS"]',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_SCHEMA_DESCRIPTOR]: Object.assign({}, fractionatedPriceSchema, {
      title: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: 'h2 span',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TRIM_RESULT
        ]
      },
      image: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '[data-component-type="s-product-image"] img',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'src'
      },
      rating: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '[aria-label$="out of 5 stars"]',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'aria-label',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_REPLACER]: [
          {
            [constants.OUTPUT_SCHEMA_REPLACER.SEARCH]: ' out of 5 stars',
            [constants.OUTPUT_SCHEMA_REPLACER.REPLACE_BY]: ''
          }
        ],
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TO_NUMBER
        ]
      },
      link: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '[data-component-type="s-product-image"] a',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'href'
      }
    })
  }
}

module.exports = { extractionSchemaForSearchPage }
