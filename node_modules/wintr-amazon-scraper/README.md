# wintr-amazon-scraper


[![Build status](https://gitlab.com/121593/wintr-amazon-scraper/badges/master/pipeline.svg)](https://gitlab.com/121593/wintr-amazon-scraper/pipelines)
[![npm version](https://badge.fury.io/js/wintr-amazon-scraper.svg)](https://badge.fury.io/js/wintr-amazon-scraper)
[![Dependencies](https://david-dm.org/121593/wintr-amazon-scraper.svg)](https://david-dm.org/121593/wintr-amazon-scraper)
[![ISC license](http://img.shields.io/badge/license-ISC-brightgreen.svg)](http://opensource.org/licenses/ISC)

This package aims to make Amazon marketplace products data retrieval easy, using [wintr service](https://wintr.com)  and its [unofficial wrapper](https://gitlab.com/121593/wintr) alongside with [amazon-url-builder](https://gitlab.com/121593/amazon-url-builder)

It basically wraps Wintr and AmazonUrlBuilder together, exposing methods to scrap typical Amazon pages

## Installation
`npm i wintr-amazon-scraper`

## Usage

### Instantiation

```ecmascript 6
const w = new WintrAmazonScraper(options)
```
Where options are passed directly to Wintr ([details here](https://github.com/121593/wintr#options))

### Scraping
Four methods are available for now. Options such as the ones use for instantiation can be passed, overriding defaults.  

- `getByProductId(id, wintrOptions)` returns parsed product information
  
- `getByQuery(searchTerm, wintrOptions, rh)` returns items found when asking for `searchTerm`. Can be narrowed down to a category using `rh` Amazon param

- `getByNodeId(id, wintrOptions)` returns items found in "Node" page

- `getBestSellersByNodeSlug(nodeSlug, wintrOptions)` returns items found in "Category BestSellers" page
  
When the result is split in various pages, a link for the next page is returned with the data

## Development
Tests and examples are not included in the Npm release to keep it lightweight.
Use the repository for development

### Example
An example application is included. Run it with : 

`npm run dev`

#### Usage example

```javascript
const { WintrAmazonScraper } = require('wintr-amazon-scraper')
const { constants } = require('wintr')

const w = new WintrAmazonScraper({
 	[constants.PARAMETERS.API_KEY]: 'XXX',
 	[constants.PARAMETERS.JS_RENDERING]: true
})

w.getByProductId('B07QY8LDGX')
.then(console.log)
.catch(err => {
	console.log(err, err.response.data)
})
```

### Contributing
Issue reports, pull requests, suggestions and comments are very welcome !

Please keep in mind that this repo use [commitizen](https://github.com/commitizen/cz-cli) -style commit messages and follow js [standard](https://standardjs.com/)'s style
