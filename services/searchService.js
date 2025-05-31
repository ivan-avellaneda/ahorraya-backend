const fs = require('fs');
const path = require('path');

const getMockData = () => {
  const rawData = fs.readFileSync(path.join(__dirname, '../data/products.json'));
  return JSON.parse(rawData);
};

module.exports = {
  getMockData,
};
