# Amazon-url-builder

This package aims to provide an easy way to generate Amazon Urls for a range of page types.

[![Build status](https://gitlab.com/121593/amazon-url-builder/badges/master/pipeline.svg)](https://gitlab.com/121593/wintr/pipelines)
[![Coverage Status](https://coveralls.io/repos/gitlab/121593/amazon-url-builder/badge.svg?branch=master)](https://coveralls.io/gitlab/121593/wintr?branch=master)
[![npm version](https://badge.fury.io/js/amazon-url-builder.svg)](https://badge.fury.io/js/amazon-url-builder)
[![ISC license](http://img.shields.io/badge/license-ISC-brightgreen.svg)](http://opensource.org/licenses/ISC)

## Installation
`npm i amazon-url-builder`

## Usage

5 methods are available to generate Urls. Each one for a specific page type: 
- `buildUrlBestSellerByNodeSlug(slug)` generates an Url for a Node bestsellers 
- `buildUrlNodeById(id)` generates an Url for a Node 
- `buildUrlNodeById(id)` generates an Url for a Node 
- `buildUrlSearchByTerm(searchTerm)` generates an Url for a search page 
- `buildUrlSearchByTermAndCategory(searchTerm, i)` generates an Url for a search page within a specific category identified by its `i` GET parameter 

## Development
Tests and examples are not included in the Npm package to keep it lightweight.
Use the repository for development

### Example
An example application is included. Run it with : 

`npm run dev`

### Contributing
Issue reports, pull requests, suggestions and comments are very welcome !

Please keep in mind that this repo use [commitizen](https://github.com/commitizen/cz-cli) -style commit messages and follow js [standard](https://standardjs.com/)'s style
