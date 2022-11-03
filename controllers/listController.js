const List = require("../models/List");

exports.apiAddtoList = function(req, res) {
  let list = new List(req.body)
  list
    .create()
    .then(function(newId) {
      res.json(newId)
    })
    .catch(function(errors) {
      res.json(errors)
    })
}

exports.updateList = function(req, res) {
  let list = new List(req.body)
  list
    .update()
    .then(function(newId) {
      res.json(newId)
    })
    .catch(function(errors) {
      res.json(errors)
    })
}
