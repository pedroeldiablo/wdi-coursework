const router = require('express').Router();
const quotesController = require('../controllers/quotesControllers');
let quotes = require("../data/quotes");
let id = 4;

router.get('/', (req, res) => res.render('index'));

// const quotes = [{
//   id: 1,
//   title: "And Smith Must Score...",
//   author: "Peter Hayden",
// },{
//   id: 2,
//   title: "The Swiss Army Knife",
//   author: "Peter Hayden",
// }];

// INDEX?{books} equivalent to {books:books} key value pair
router.get('/quotes', (req, res) => res.render('quotes/index',{quotes}));

// NEW
router.get('/quotes/new', (req, res) => res.render('quotes/new'));

// SHOW
router.get('/quotes/:id', (req, res) => {

  let quote = quotes.filter((quote) => {
    return quote.id == req.params.id;
  })[0];

  res.render('quotes/show', {quote});
});

// CREATE
router.post('/quotes', (req, res) => {
  let quote = req.body.quote;
  quote.id = id;
  quotes.push(quote);
  id++;
  res.redirect(301,'/quotes');
});

// EDIT
router.get('/quotes/:id/edit', (req, res) => {
  let quote = quotes.filter((quote) => {
    return quote.id == req.params.id;
  })[0];

  res.render('quotes/edit', {quote});
});
// UPDATE where it currently is and then the form data. gets the current id and then replaces the book already there in the array. redirects es6 wizardry
router.put('/quotes/:id', (req, res) => {
  let index = quotes.findIndex((quote) =>{
    return quote.id == req.params.id;
  });
  let quote = req.body.quote;
  quote.id = parseInt(req.params.id);
  quotes[index] = quote;

  res.redirect(301, `/quotes/${quote.id}`);
});

// DELETE
router.delete('/quotes/:id', (req, res) => {
  let index = quotes.findIndex((quote) =>{
    return quote.id == req.params.id;
  });
  quotes.splice(index, 1);
  res.redirect(301, '/quotes');
});

module.exports = router;
