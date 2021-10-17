const fs = require('fs');
const path = require('path');
const makeDir = require('make-dir');

//Database
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const dbArticles = path.join(process.cwd(), `.articles/articles.json`);

exports.insertOrUpdate = async (article) => {
  let noticeLowPrice = false;
  let noticeDesiredPrice = false;
  if (!fs.existsSync(dbArticles)) {
    await makeDir(`.articles`);
    process.chdir(`.articles`);
    fs.writeFileSync(`articles.json`, `{}`);
  }

  const adapter = new FileSync(dbArticles);
  const db = low(adapter);

  if (db.get(`articles`).find({ title: article.title }).value()) {
    const articleStored = db
      .get(`articles`)
      .find({ title: article.title })
      .value();
    if (article.price === 0) {
      article.price = articleStored.price;
      article.currency = articleStored.currency;
    }
    db.get(`articles`)
      .find({ title: article.title })
      .assign({
        date: article.date,
        price: article.price,
        availability: article.availability,
      })
      .write();

    if (article.price < articleStored.minPrice.minPrice) {
      db.get(`articles`)
        .find({ title: article.title })
        .assign({
          minPrice: {
            minPriceDate: article.date,
            minPrice: article.price,
            minPriceCurrency: article.currency,
          },
        })
        .write();
      noticeLowPrice = true;
    }
    if (article.price < parseInt(articleStored.desiredPrice)) {
      noticeDesiredPrice = true;
    }
  } else {
    //console.log(`Article not found on DB, writing`);
    db.defaults({ articles: [] }).write();
    db.get(`articles`).push(article).write();
  }
  return { noticeLowPrice, noticeDesiredPrice };
};

exports.findAllUrls = async () => {
  const adapter = new FileSync(dbArticles);
  const db = low(adapter);
  const urls = db.get(`articles`).map(`url`).value();
  return urls;
};

exports.findAllTitles = async () => {
  const adapter = new FileSync(dbArticles);
  const db = low(adapter);
  const urls = db.get(`articles`).map(`title`).value();
  return urls;
};

exports.deleteArticle = async (title) => {
  const adapter = new FileSync(dbArticles);
  const db = low(adapter);
  db.get(`articles`).remove({ title: title }).write();
};
