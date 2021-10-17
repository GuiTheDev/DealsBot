const http = require('http')
// Templating
const ejs = require('ejs')
const { join } = require('path')
// Post request handling
const qs = require('querystring')
const { WintrAmazonScraper } = require('../src')
const { constants } = require('wintr')

/*
** Utils **
 */
// noinspection JSUnusedLocalSymbols
const processPost = (req, res) => new Promise((resolve, reject) => {
  // Gather POST data
  let body = ''
  req.on('data', function (data) {
    body += data
    // Too much POST data (~1M), kill the connection!
    if (body.length > 1e6) { req.connection.destroy() }
  })

  req.on('end', function () {
    const post = qs.parse(body)
    resolve(post)
    // process
  })
})

const renderTemplate = (res, data = {}) => {
  ejs.renderFile(join(__dirname, '/main.ejs'), data, function (err, html) {
    if (err) {
      console.error('Error rendering ejs. Received : ', err)
    }
    res.writeHead(err ? 400 : 200, { 'Content-Type': 'text/html' })
    res.write(html || 'Error rendering ejs')
    res.end()
  })
}

const handleProcessError = (res, error) => {
  console.error(error)
  return renderTemplate(res, { error })
}

/*
* Form processing
 */

const processForm = (url, post) => {
  const scraper = new WintrAmazonScraper({ apikey: post.apikey })

  // noinspection JSUnresolvedVariable
  const additionalOptions = { [constants.PARAMETERS.COUTRY_CODE]: post.countryCode }

  switch (url) {
    case '/parseProduct':
      // noinspection JSUnresolvedVariable
      return scraper.getByProductId(post.productId, additionalOptions)
    case '/parseSearch':
      // @todo: add rh parameter handling
      return scraper.getByQuery(post.searchTerm, additionalOptions)
    case '/parseNode':
      // noinspection JSUnresolvedVariable
      return scraper.getByNodeId(post.nodeId, additionalOptions)
    case '/parseNodeBestSellers':
      // noinspection JSUnresolvedVariable
      return scraper.getBestSellersByNodeSlug(post.nodeSlug, additionalOptions)
    default:
      throw new Error('Bad request url')
  }
}
/*
** Server **
 */
const server = http.createServer(function (req, res) {
  const postUrls = ['/parseProduct', '/parseSearch', '/parseNode', '/parseNodeBestSellers']
  if (req.method === 'POST' && postUrls.includes(req.url)) {
    return processPost(req, res)
      .then(post => {
        return processForm(req.url, post)
          .then(result => {
            console.info(`processForm Promise resolve. Status ${result.info.status}, content : `, result.content)
            renderTemplate(res, { result: result.content })
          })
          .catch(console.error)
      })
      .catch(error => handleProcessError(res, error))
    // Homepage, fallback
  } else {
    return renderTemplate(res, {})
  }
})

server.listen(8080)
