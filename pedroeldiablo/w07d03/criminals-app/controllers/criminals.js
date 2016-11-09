const Criminal = require('../models/Criminal');

function criminalsIndex(request, response) {
  Criminal.find(function(error, criminals) {
    if(error) return response.status(500).json({message: 'Could not find any criminal'});

    response.json(criminals);
  });
}

function criminalsCreate(request, response) {
  var criminal = new Criminal(request.body);
  criminal.save(function(error) {
    if(error) return response.status(400).json({messsage: 'Could not ceate criminal', error: error});
    response.json(criminal);
  });
}

function criminalsShow(request, response) {
  var id = request.params.id;

  Criminal.findById({_id: id}, function(error, criminal) {
    if(error) return response.status(500).json({message: 'Could not find criminal', error: error});
    if(!criminal) return response.status(404).json({message: 'Not found'});

    response.json(criminal);
  });
}

function criminalsUpdate(request, response) {
  var id = request.params.id;

  Criminal.findById({_id: id}, function(error, criminal) {
    if(error) return response.status(500).json({message: 'Could not find criminal', error: error});
    if(!criminal) return response.status(404).json({message: 'Not found'});

    if(request.body.name) criminal.name = request.body.name;
    if(request.body.location) criminal.location = request.body.location;
    if(request.body.status) criminal.status = request.body.status;

    criminal.save(function(error) {
      if(error) return response.status(400).json({messsage: 'Could not update criminal', error: error});

      response.json(criminal);
    });
  });
}

function criminalsDelete(request, response) {
  var id = request.params.id;

  Criminal.remove({_id: id}, function(error) {
    if(error) return response.status(500).json({message: 'Could not delete criminal', error: error });

    response.status(204).send();
  });
}

module.exports = {
  index: criminalsIndex,
  create: criminalsCreate,
  show: criminalsShow,
  update: criminalsUpdate,
  delete: criminalsDelete
};