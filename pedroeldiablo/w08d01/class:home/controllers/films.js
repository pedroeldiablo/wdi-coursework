const Film = require('../models/film');

function filmsIndex(req, res) {
  Film.find((err, films) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(films);
  });
}

function filmsCreate(req, res) {
  Film.create(req.body, (err, film) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(film);
  });
}

function filmsShow(req, res) {
  Film.findById(req.params.id, (err, film) => {
    if(err) return res.status(500).json({ error: err });
    if(!film) return res.status(404).json({ error: 'Not found' });
    return res.json(film);
  });
}

function filmsUpdate(req, res) {
  Film.findById(req.params.id, (err, film) => {
    if(err) return res.status(500).json({ error: err });
    if(!film) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      film[key] = req.body[key];
    }

    film.save((err, film) => {
      if(err) return res.status(400).json({ error: err });
      res.json(film);
    });
  });
}

function filmsDelete(req, res) {
  Film.findById(req.params.id, (err, film) => {
    if(err) return res.status(500).json({ error: err });
    if(!film) return res.status(404).json({ error: 'Not found' });

    film.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: filmsIndex,
  create: filmsCreate,
  show: filmsShow,
  update: filmsUpdate,
  delete: filmsDelete
};