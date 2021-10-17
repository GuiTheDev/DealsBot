const axios = require('axios');
const cheerio = require('cheerio');

exports.scrap = async (url) => {
  let pageContent;
  try {
    pageContent = await axios.get(url);
  } catch (err) {
    spinner.fail(`Fail`);
    console.log(`Could not fetch any item. Are you using an amazon URL?`);
  }

  const $ = cheerio.load(pageContent.data);
  const presentations = $('body')
    .map((_, el) => {
      el = $(el);
      title = el.find('#productTitle').text().trim();
      price = el.find('#price_inside_buybox').text().trim();
      if (price === '') {
        price = el.find('#newBuyBoxPrice').text().trim();
      }
      availability = el
        .find('#availabilityInsideBuyBox_feature_div #availability span')
        .text()
        .trim();
      if (availability === '') {
        availability = el.find('#availability span').text().trim();
      }
      //console.log(title, price, availability);
    })
    .get();

  return {
    title: title,
    price: price,
    availability: availability,
  };
};
