const Beer = require('../models/beer');

function beersIndex(req, res) {
  Beer.find((err, beers) => {
    if(err) return res.status(500).json({ error: "500: Server Error" });
    res.json(beers);
  });
}

function beersCreate(req, res) {
  console.log(req.body);
  Beer.create(req.body, (err, beer) => {
    if(err) return res.status(400).json({ error: "400: Invalid data" });
    res.status(201).json(beer);
  });
}

function beersShow(req, res) {
  Beer.findById(req.params.id, (err, beer) => {
    if(err) return res.status(500).json({ error: "500: Server Error" });
    res.json(beer);
  });
}

function beersUpdate(req, res) {
  Beer.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, beer) => {
    if(err) return res.status(400).json({ error: "400: Invaid data" });
    res.json(beer);
  });
}

function beersDelete(req, res) {
  Beer.findByIdAndRemove(req.params.id, (err) => {
    if(err) return res.status(500).json({ error: "500: Server Error" });
    res.status(204).send();
  });
}

module.exports = {
  index: beersIndex,
  create: beersCreate,
  show: beersShow,
  update: beersUpdate,
  delete: beersDelete
};