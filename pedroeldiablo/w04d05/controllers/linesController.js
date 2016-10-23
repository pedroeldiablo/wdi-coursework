const Line = require('../models/line');

function linesIndex(req, res){
  Line.find({}, (err, lines) =>{
    if(err) return res.status(500).json({ error: "500:Server Error"});
    res.json(lines);
  });
}

function linesCreate(req, res){
  Line.create(req.body, (err, line) =>{
    if(err) return res.status(500).json({error:err});
    res.status(201).json(line);
  });
}

function linesShow(req, res){
  Line.findById(req.params.id, (err, line) => {
    if(err) return res.status(500).json({error:err});
    res.status(201).json(line);
  });
}

function linesUpdate(req, res){
  Line.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, line) => {
    if(err) return res.status(500).json({error:err});
    res.json(line);
  });
}

function linesDelete(req, res){
  Line.findByIdAndRemove(req.params.id, (err) => {
    if(err) return res.status(500).json({error:err});
    res.send(204);
  });
}



module.exports = {
  index: linesIndex,
  create: linesCreate,
  show: linesShow,
  update: linesUpdate,
  delete: linesDelete
};
