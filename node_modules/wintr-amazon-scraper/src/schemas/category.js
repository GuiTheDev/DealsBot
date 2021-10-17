const { constants } = require('wintr')
const { fractionatedPriceSchema } = require('./_commons')

/**
 * Wintr output schema for category page
 */
const categoryProductListItemSchema = Object.assign({}, fractionatedPriceSchema, {
  title: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.octopus-pc-asin-title span',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
      constants.OUTPUT_SCHEMA_MODIFIERS.TRIM_RESULT
    ]
  },
  image: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: 'img',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*html*'
  },
  link: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: 'a.octopus-pc-item-link',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'href'
  }
})

const extractionSchemaForCategoryPage = {
  featuredCategories: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_CSS_SELECTOR]: '.octopus-pc-category-card-v2-item',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_SCHEMA_DESCRIPTOR]: {
      // @fixme: Image src does not get extracted properly. Possibly lazy-loading related
      image: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: 'img',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'src'
      },
      title: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.a-section octopus-pc-category-card-v2-category-title span',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TRIM_RESULT
        ]
      },
      link: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '.a-link-normal octopus-pc-category-card-v2-category-link',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: 'href'
      }
    }
  },
  bestSellers: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_CSS_SELECTOR]: '.octopus-best-seller-card ul > li',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_SCHEMA_DESCRIPTOR]: categoryProductListItemSchema
  },
  topRated: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_CSS_SELECTOR]: '.octopus-top-rated-card ul > li',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_SCHEMA_DESCRIPTOR]: categoryProductListItemSchema
  },
  mostWishedFor: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_CSS_SELECTOR]: '.octopus-most-wished-for-card ul > li',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_SCHEMA_DESCRIPTOR]: categoryProductListItemSchema
  },
  mostGifted: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_CSS_SELECTOR]: '.octopus-most-gifted-card ul > li',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_SCHEMA_DESCRIPTOR]: categoryProductListItemSchema
  },
  hotNew: {
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_CSS_SELECTOR]: '.octopus-new-release-card ul > li',
    [constants.OUTPUT_SCHEMA_DESCRIPTORS.GROUP_SCHEMA_DESCRIPTOR]: categoryProductListItemSchema
  }
}

module.exports = { extractionSchemaForCategoryPage }
