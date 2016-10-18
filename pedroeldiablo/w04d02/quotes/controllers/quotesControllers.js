let quotes = require("../data/quotes");

// INDEX
const quotesIndex = (req, res) => {
  res.render('quotes/index', { quotes });
};
// NEW
const quotesNew = (req, res) => {
  res.render('quotes/new');
};
// CREATE
const quotesCreate = (req, res) => {
  let quote = req.body.quotes;
  quote.id = quotes.length;
  quotes.push(quotes);
  res.redirect(302, "/");
};
// SHOW
const quotesShow = (req, res) => {
  const id = parseInt(req.params.id);
  console.log("id: ", id);
  const quote = quotes[id];
  console.log("quote: ", quote);
  res.render("quotes/show", { quote });
};
// EDIT
const quotesEdit = (req, res) => {
  const id = parseInt(req.params.id);
  res.render("quotes/edit", { quote: quotes[id] });
};
// UPDATE
const quotesUpdate = (req, res) => {
  const id = parseInt(req.params.id);
  let quote = req.body.quote;
  quote.id  = id;
  quotes[id] = quote;
  res.redirect(302, `/quotes/${id}`);
};
// DELETE
const quotesDelete = (req, res) => {
  const id = req.params.id;
  quotes.splice(id, 1);
  quotes = quotes.map(quote => {
    quote.id--;
    return quote;
  });
  res.redirect(302, "/");
};

module.exports = {
  index: quotesIndex,
  new: quotesNew,
  create: quotesCreate,
  show: quotesShow,
  edit: quotesEdit,
  update: quotesUpdate,
  delete: quotesDelete,
};
