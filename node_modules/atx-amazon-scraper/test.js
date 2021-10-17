const test = require('ava');
const execa = require('execa');

const minimal = [`-m`, `true`];

//Testing is just for check if URL give any data, not checking the contain of the data.

//Checking amazon ES
test(`amazon ES`, async (t) => {
  const { stdout } = await execa(`./index.js`, [
    `https://www.amazon.es/gp/product/B08C7KG5LP`,
    ...minimal,
  ]);
  t.not(
    stdout,
    `Title: 
Price: 
Availability: `
  );
});

//Checking amazon COM
test(`amazon COM`, async (t) => {
  const { stdout } = await execa(`./index.js`, [
    `https://www.amazon.com/dp/B01H6GUCCQ/`,
    ...minimal,
  ]);
  t.not(
    stdout,
    `Title: 
Price: 
Availability: `
  );
});

//Checking bad URL:
test(`Bad URL`, async (t) => {
  const { stdout } = await execa(`./index.js`, [
    `https://google.com/`,
    ...minimal,
  ]);
  t.is(stdout, `Could not fetch any item. Are you using an amazon URL?`);
});

//TODO: Testing persistence
