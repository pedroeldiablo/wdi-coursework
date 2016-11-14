const Bakery = require('../models/bakery');

function bakeriesIndex(req, res) {
  Bakery.find((err, bakeries) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(bakeries);
  });
}

function bakeriesCreate(req, res) {
  Bakery.create(req.body, (err, bakery) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(bakery);
  });
}

function bakeriesShow(req, res) {
  Bakery.findById(req.params.id, (err, bakery) => {
    if(err) return res.status(500).json({ error: err });
    if(!bakery) return res.status(404).json({ error: 'Not found' });
    return res.json(bakery);
  });
}

function bakeriesUpdate(req, res) {
  Bakery.findById(req.params.id, (err, bakery) => {
    if(err) return res.status(500).json({ error: err });
    if(!bakery) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      bakery[key] = req.body[key];
    }

    bakery.save((err, bakery) => {
      if(err) return res.status(400).json({ error: err });
      res.json(bakery);
    });
  });
}

function bakeriesDelete(req, res) {
  Bakery.findById(req.params.id, (err, bakery) => {
    if(err) return res.status(500).json({ error: err });
    if(!bakery) return res.status(404).json({ error: 'Not found' });

    bakery.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: bakeriesIndex,
  create: bakeriesCreate,
  show: bakeriesShow,
  update: bakeriesUpdate,
  delete: bakeriesDelete
};
