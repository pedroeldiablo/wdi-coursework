let quotes = require("../data/quotes");

const quotesIndex = (req, res) => {
  res.render('quotes/index', { quotes });
};
// NEW
const quotesNew = (req, res) => {
  res.render('quotes/new');
};
