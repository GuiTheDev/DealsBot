const { extractionSchemaForCategoryBestSellerPage } = require('./schemas/bestseller')
const { extractionSchemaForCategoryPage } = require('./schemas/category')
const { extractionSchemaForProductPage } = require('./schemas/product')
const { extractionSchemaForSearchPage } = require('./schemas/search')

module.exports = {
  extractionSchemaForCategoryBestSellerPage,
  extractionSchemaForCategoryPage,
  extractionSchemaForProductPage,
  extractionSchemaForSearchPage
}
