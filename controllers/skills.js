import * as skillDb from "../data/skill-db.js"

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete,
}

function deleteSkill(req, res) {
  skillDb.findByIdAndDelete(req.params.id, function(error, skill) {
    res.redirect('/skills')
  })
}

function create(req, res) {
  skillDb.create(req.body, function(error, skill) {
    res.redirect('/skills')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function index(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
      time: req.time
    })
  })
}

function show(req, res) {
  skillDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill: skill,
      error: error,
    })
  })
}
