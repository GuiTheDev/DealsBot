const { AmazonUrlBuilder } = require('amazon-url-builder')
const { Wintr, constants } = require('wintr')
const extractionSchemas = require('../src/schemas')

class WintrAmazonScraper {
  /**
   * WintrAmazonScraper constructor
   * @param {Object} options - Options are passed directly to Wintr
   */
  constructor (options) {
    if (!options) {
      throw new Error('Options parameter should be supplied')
    }

    // Amazon require Js rendering, allowing it by default
    this.wintr = new Wintr(Object.assign({}, options, { [constants.PARAMETERS.JS_RENDERING]: true }))
  }

  /**
     * Parse Amazon Node page
     * @param {string} id - Node id
     * @param {Object} options - Wintr-compatible options
     * @return {Promise<>}
     */
  getByNodeId (id, options) {
    const url = AmazonUrlBuilder.buildUrlNodeById(id)

    return this.wintr.fetch(Object.assign({}, options,
      {
        [constants.PARAMETERS.URL]: url,
        [constants.PARAMETERS.OUTPUT_SCHEMA]: extractionSchemas.extractionSchemaForCategoryPage
      }
    ))
  }

  /**
     * Parse Amazon Node BestSellers page
     * @param {string} nodeSlug - Node slug
     * @param {Object} options - Wintr-compatible options
     * @return {Promise<>}
     */
  getBestSellersByNodeSlug (nodeSlug, options) {
    const url = AmazonUrlBuilder.buildUrlBestSellerByNodeSlug(nodeSlug)

    return this.wintr.fetch(Object.assign({}, options,
      {
        [constants.PARAMETERS.URL]: url,
        [constants.PARAMETERS.OUTPUT_SCHEMA]: extractionSchemas.extractionSchemaForCategoryBestSellerPage
      }
    ))
  }

  /**
     * Parse Amazon product page
     * @param {string} id - Product id
     * @param {Object} options - Wintr-compatible options
     * @return {Promise<>}
     */
  getByProductId (id, options) {
    const url = AmazonUrlBuilder.buildUrlProductById(id)

    return this.wintr.fetch(Object.assign({}, options,
      {
        [constants.PARAMETERS.URL]: url,
        [constants.PARAMETERS.OUTPUT_SCHEMA]: extractionSchemas.extractionSchemaForProductPage
      }
    ))
  }

  /**
     * Parse Amazon Search page
     * @param {string} searchTerm - Term used in search
     * @param {Object} options - Wintr-compatible options
     * @param {?string} rh - "rh" Amazon param, indicating category
     * @return {Promise<>}
     */
  getByQuery (searchTerm, options, rh = null) {
    const url = rh
      ? AmazonUrlBuilder.buildUrlSearchByTermAndCategory(searchTerm, rh)
      : AmazonUrlBuilder.buildUrlSearchByTerm(searchTerm)

    return this.wintr.fetch(Object.assign({}, options,
      {
        [constants.PARAMETERS.URL]: url,
        [constants.PARAMETERS.OUTPUT_SCHEMA]: extractionSchemas.extractionSchemaForSearchPage
      }
    ))
  }
}

module.exports = { WintrAmazonScraper }
