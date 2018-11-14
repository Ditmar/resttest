var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = ["Jurassic World 2: El Reino Caído",
  "Titanes del Pacífico 2: La Insurrección",
  "Misión: Imposible 6 - Repercusión",
  "Bohemian Rhapsody: La historia de Freddie Mercury",
  "Ocean's 8: Las Estafadoras",
  "El Rascacielos",
  "Tomb Raider: Las aventuras de Lara Croft",
  "Ant-Man 2 y la Avispa"];
  var host = "http://52.67.169.228:8000"
  var list = [];
  for (var i = 0; i < data.length; i ++) {
    var r = i + 1;
    var obj = {}
    obj["title"] = data[i];
    obj["descripcion"] = data[i];
    obj["image"] = host + "/images/" + r + ".jpg";
    list.push(obj)

  }
  res.status(200).json({
    "data" : list
  });
});

module.exports = router;
