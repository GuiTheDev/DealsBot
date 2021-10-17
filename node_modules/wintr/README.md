# Wintr Api Abstraction
Unofficial [Wintr scrapper service](https://wintr.com) abstraction

[![Build status](https://gitlab.com/121593/wintr/badges/master/pipeline.svg)](https://gitlab.com/121593/wintr/pipelines)
[![Coverage Status](https://coveralls.io/repos/gitlab/121593/wintr/badge.svg?branch=master)](https://coveralls.io/gitlab/121593/wintr?branch=master)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/121593/wintr)
[![npm version](https://badge.fury.io/js/wintr.svg)](https://badge.fury.io/js/wintr)
[![Dependencies](https://david-dm.org/121593/wintr.svg)](https://david-dm.org/121593/wintr.svg)
[![ISC license](http://img.shields.io/badge/license-ISC-brightgreen.svg)](http://opensource.org/licenses/ISC)

## Installation
`npm i wintr`

## Usage
Wintr object should be instantiated with default options, including at least an Api key. See below for options description.
 
```ecmascript 6
const w = new Wintr(options)
```

Two public methods are then available to interact with the Api :

- Fetch Api : 
`w.fetch(options) : Promise<>`
- Get account data : 
`w.getAccountData(options): Promise<>`

### Options
Options are detailed [here](https://www.wintr.com/api-documentation), and are available as constants in the module for easy rules writing


### 'Real-life' example

Extracting title and price from an Amazon product page :

```ecmascript 6
const { Wintr, constants } = require('wintr')

const scraper = new Wintr({
 [constants.PARAMETERS.API_KEY]: 'myApiKey',
 [constants.PARAMETERS.JS_RENDERING]: true
})

scraper.fetch({
  [constants.PARAMETERS.URL]: 'https://amazon.com/dp/productId',
  [constants.PARAMETERS.OUTPUT_SCHEMA]:
    {
      productTitle: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '#productTitle',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TRIM_RESULT
        ]
      },
      price: {
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_SELECTOR]: '#priceblock_ourprice',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.CSS_ATTRIBUTE]: '*text*',
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_MODIFIER]: [
          constants.OUTPUT_SCHEMA_MODIFIERS.TRIM_RESULT
        ],
        [constants.OUTPUT_SCHEMA_DESCRIPTORS.WINTR_REPLACER]: [
          {
            [constants.OUTPUT_SCHEMA_REPLACER.SEARCH]: '$',
            [constants.OUTPUT_SCHEMA_REPLACER.REPLACE_BY]: ''
          }
        ]
      }
    }
  }
)
.then(({ content }) => { 
  console.log(content)
  // Logs something like that :
  // {
  //    productTitle: "Super cool product that everyone will like",
  //    price: "999.99"
  // }
})
.catch(console.error)
```

## Development
Tests and examples are not included in the Npm release to keep it lightweight.
Use the repository for development

### Tests
Tests are handled by [ava](https://github.com/avajs/ava), and coverage by [nyc](https://github.com/istanbuljs/nyc).

Commands includes : 
- `npm run test` : Run tests
- `npm run coverage` : Run tests through nyc, and output lcov file

### Example
An example application is included. Run it with : 

`npm run dev` 

and open your browser at [localhost:8080](http://localhost:8080)

### Contributing
Issue reports, pull requests, suggestions and comments are very welcome, don't hesitate !

Please keep in mind that this repo use [commitizen](https://github.com/commitizen/cz-cli) -style commit messages and follow js [standard](https://standardjs.com/)'s style

### License

[ISC](https://choosealicense.com/licenses/isc/)

Copyright (c) 2020, [121593](https://github.com/121593)
