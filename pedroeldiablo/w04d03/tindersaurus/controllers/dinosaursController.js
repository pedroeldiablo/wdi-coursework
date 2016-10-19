const Dinosaur = require('../models/dinosaur');

function dinosaursIndex(req, res){
  Dinosaur.find({}, (err, dinosaurs) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('dinosaurs/index', { dinosaurs });
  });
}

function dinosaursNew(req, res){
  res.render('dinosaurs/new');
}

function dinosaursCreate(req, res) {
  Dinosaur.create(req.body.dinosaur, (err, dinosaur) => {
    if(err) return res.status(500).send("500: Server Error");
    res.redirect(301, '/dinosaurs');
  });
}

function dinosaursShow(req, res) {
  Quote.findById(req.params.urlId, (err, dinosaur) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('dinosaurs/show', { dinosaur });
  });
}

function dinosaursEdit(req, res) {
  Dinosaur.findById(req.params.urlId, (err, dinosaur) => {
    if(err) return res.status(500).send("500: Server Error");
    res.render('dinosaurs/edit', { dinosaur });
  });
}

function dinosaursUpdate(req, res) {
  Dinosaur.findByIdAndUpdate(req.params.urlId, req.body.dinosaur, (err, dinosaur) => {
    if(err) return res.status(500).send("500: Server Error");
    res.redirect(301, `/dinosaurs/${dinosaur.id}`);
  });
}

function dinosaursDelete(req, res) {
  Quote.findByIdAndRemove(req.params.urlId, (err) => {
    if(err) return res.status(500).send("500: Server Error");
    res.redirect(301, '/dinosaurs');
  });
}

module.exports = {
  index: dinosaursIndex,
  new: dinosaursNew,
  create: dinosaursCreate,
  show: dinosaursShow,
  edit: dinosaursEdit,
  update: dinosaursUpdate,
  delete: dinosaursDelete
};
