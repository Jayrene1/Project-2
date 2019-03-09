var db = require("../models");

module.exports = function(app) {
  app.get("/api/datasets", function(req, res) {
    db.Dataset.findAll({}).then(function(dbDataset) {
      res.json(dbDataset);
    });
  });

  app.get("/api/datasets/:id", function(req, res) {
    // Find one Dataset with the id in req.params.id and return them to the Dataset with res.json
    db.Dataset.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbDataset) {
      res.json(dbDataset);
    });
  });

  app.post("/api/datasets", function(req, res) {
    console.log(req.body);
    db.datasets.create({
      json_data: req.body
    }).then(function(dbDatasets) {
      res.json(dbDatasets);
    });
  });

  app.delete("/api/datasets/:id", function(req, res) {
    // Delete the Dataset with the id available to us in req.params.id
    db.Dataset.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDataset) {
      res.json(dbDataset);
    });
  });
};