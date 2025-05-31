const { getMockData } = require('../services/searchService');

const searchProducts = (req, res) => {
  const query = req.query.q || '';
  const data = getMockData();

  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  res.json(filtered);
};

module.exports = {
  searchProducts,
};
