const Project = require("../models/project");

function projectsIndex(req, res) {
	Project.find({}, (err, projects) => {
		if(err) return res.status(500).json({ error: err });
		return res.status(200).json(projects);
	});
}

function projectsCreate(req, res) {
	Project.create(req.body, (err, project) => {
		if(err) return res.status(422).json({ error: err});
		return res.status(201).json(project);
	});
}

function projectsShow(req, res) {
 Project.findById(req.params.id, (err, project) => {
   if(err) return res.status(500).json({ error: err });
 }).populate('users')
  .exec((err, projects) => {
   if(err) return console.log("Error finding users", err);
   return res.status(200).json(projects);
 });
}

function projectsUpdate(req, res) {
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, project) => {
    if(err) return res.status(422).json({ error: err });
    return res.status(200).json(project);
  });
}

function projectsDelete(req, res) {
  Project.findByIdAndRemove(req.params.id, (err) => {
    if(err) return res.status(500).json({ error: err });
    res.status(204).end();
  });
}

module.exports = {
  index: projectsIndex,
  create: projectsCreate,
	show: projectsShow,
	update: projectsUpdate,
	delete: projectsDelete
};
