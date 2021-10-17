const url = require('url')
const constants = require('./constants')
const { formatUnicorn } = require('./utils')

class AmazonUrlBuilder {
  /**
   *
   * @param {string} slug - Node slug (ex: sporting-goods)
   * @param {object} parameters - GET parameters
   * @returns {string|*}
   */
  static buildUrlBestSellerByNodeSlug (slug, parameters = null) {
    const url = formatUnicorn(constants.URLS.BEST_SELLERS, { slug })
    return AmazonUrlBuilder._addUrlParameters(url, parameters)
  }

  /**
   *
   * @param {string} id - Node id (ex: 2811119011)
   * @param {object} parameters - GET parameters
   * @returns {string|*}
   */
  static buildUrlNodeById (id, parameters = null) {
    const url = formatUnicorn(constants.URLS.NODE, { id })
    return AmazonUrlBuilder._addUrlParameters(url, parameters)
  }

  /**
   *
   * @param {string} id - Product id (ex: B0756CYWWD)
   * @param {object} parameters - GET parameters
   * @returns {string|*}
   */
  static buildUrlProductById (id, parameters = null) {
    const url = formatUnicorn(constants.URLS.PRODUCT, { id })
    return AmazonUrlBuilder._addUrlParameters(url, parameters)
  }

  /**
   * @param {string} searchTerm - Search term
   * @param {object} parameters - GET parameters
   * @return {string|*}
   */
  static buildUrlSearchByTerm (searchTerm, parameters = null) {
    const url = formatUnicorn(constants.URLS.SEARCH, {
      searchTerm: encodeURI(searchTerm)
    })
    return AmazonUrlBuilder._addUrlParameters(url, parameters)
  }

  /**
   *
   * @param {string} searchTerm - Search term
   * @param {string} categoryI - Category 'i' identifier
   * @param {object} parameters - GET parameters
   * @return {string|*}
   */
  static buildUrlSearchByTermAndCategory (searchTerm, categoryI, parameters = null) {
    const url = formatUnicorn(constants.URLS.SEARCH_CAT, {
      searchTerm: encodeURI(searchTerm),
      i: categoryI
    })
    return AmazonUrlBuilder._addUrlParameters(url, parameters)
  }

  /**
   /**
   * @param {string} _url - Unparametrized url
   * @param {object} parameters - GET parameters
   * @returns {string|*}
   * @private
   */
  static _addUrlParameters (_url, parameters = null) {
    if (!parameters || !Object.keys(parameters).length) {
      return _url
    }

    // Test parameters validity ?

    // create SearchUrlParams from supplied options
    const objectizedUrl = new url.URL(_url)
    const urlParams = objectizedUrl.searchParams

    // Assign new params
    Object.keys(parameters).forEach(k => urlParams.set(k, parameters[k]))

    return objectizedUrl.toString()
  }
}

module.exports = { AmazonUrlBuilder, constants }
