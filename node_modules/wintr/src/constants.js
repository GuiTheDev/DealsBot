const baseUrl = 'https://api.wintr.com'
const fetchPathname = 'fetch'
const accountInfoPathname = 'accountdata'

/*
 * Reproduce information from Wintr website.
 * Source : https://www.wintr.com/api-documentation
 */

// Freeze object to prevent constants modification
module.exports = Object.freeze({
  URL: {
    FETCH: `${baseUrl}/${fetchPathname}`,
    ACCOUNT_INFO: `${baseUrl}/${accountInfoPathname}`
  },

  // Url to extract data from
  PARAMETERS: {
    URL: 'url',
    // WINTR API key
    API_KEY: 'apikey',
    // Custom geolocation
    COUTRY_CODE: 'countrycode',
    // Custom referer
    REFERER: 'referer',
    // Custom referer
    USER_AGENT: 'useragent',
    // Custom headers
    HEADERS: 'headers',
    // Request method
    METHOD: 'method',
    // Request input data
    BODY: 'body',
    // HTTP authentication
    AUTH: 'auth',
    // Javascript rendering
    JS_RENDERING: 'jsrender',
    // JSON output schema
    OUTPUT_SCHEMA: 'outputschema',
    // Account data route parameters
    ACCOUNT_PARAM_DATA_ASKED: 'data',
    ACCOUNT_PARAM_DATA_ASKED_INFO: 'info',
    ACCOUNT_PARAM_DATA_ASKED_ANALYTICS: 'analytics'
  },

  OUTPUT_SCHEMA_DESCRIPTORS: {
    CONTAIN: 'contains',
    CSS_SELECTOR: 'selector',
    CSS_ATTRIBUTE: 'attr',
    DO_NOT_CONTAIN: 'doesnotcontain',
    FILTER_EMPTY_STRINGS: 'filteremtystrings',
    GROUP_CSS_SELECTOR: 'group',
    GROUP_SCHEMA_DESCRIPTOR: 'data',
    WINTR_MODIFIER: 'modifier',
    WINTR_REPLACER: 'replacer'
  },

  OUTPUT_SCHEMA_MODIFIERS: {
    TO_UPPERCASE: 'touppercase',
    TO_LOWERCASE: 'tolowercase',
    TO_NUMBER: 'tonumber',
    TRIM_RESULT: 'totrimmed'
  },

  OUTPUT_SCHEMA_REPLACER: {
    SEARCH: 'search',
    REPLACE_BY: 'replace'
  }
})
