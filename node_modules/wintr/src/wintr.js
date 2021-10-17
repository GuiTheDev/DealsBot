// noinspection SpellCheckingInspection
const axios = require('axios')
// noinspection SpellCheckingInspection
const { URL: wurls, PARAMETERS: wparams } = require('./constants')

/**
 * Wintr Api abstraction
 * @todo: Add validity checks on ouptut_schema option
 */
class Wintr {
  constructor (options) {
    if (!options) {
      throw new Error('Options parameter should be supplied')
    }

    if (!Object.hasOwnProperty.call(options, wparams.API_KEY)) {
      throw new Error('Api key should be supplied')
    }

    // Check options supplied
    this._areOptionsKnown(options)

    // Store options
    this.options = options
  }

  _getMergedOptions (options) {
    // Check request-time options validity
    this._areOptionsKnown(options)
    // Options passed at request time overtake default ones
    return Object.assign({}, this.options, options)
  }

  _areOptionsKnown (options) {
    Object.keys(options).forEach(key => {
      if (!this._isOptionKnown(key)) {
        throw new Error(`Option ${key} is not allowed`)
      }
    })
  }

  _isOptionKnown (option) {
    const authorizedOptions = Object.values(wparams)
    return authorizedOptions.includes(option)
  }

  // Public Methods
  getAccountInfo (options = {}) {
    const mergedOptions = this._getMergedOptions(options)
    return axios.get(`${wurls.ACCOUNT_INFO}?${wparams.API_KEY}=${mergedOptions[wparams.API_KEY]}&${wparams.ACCOUNT_PARAM_DATA_ASKED}=${mergedOptions[wparams.ACCOUNT_PARAM_DATA_ASKED]}`)
      .then(({ data }) => Promise.resolve(data))
  }

  fetch (options = {}) {
    return axios.post(
      wurls.FETCH,
      this._getMergedOptions(options)
    )
      .then(({ data }) => Promise.resolve(data))
  }
}

module.exports = { Wintr }
