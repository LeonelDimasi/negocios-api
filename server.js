var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
var app = express();

var routeSaya = require('./route/route');

app.use(cors());
app.use(bodyParser.json());
app.use(routeSaya);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('<h1>Esta direccion pertenece a una Api de pruebas</h1>');
  });
app.listen(3002, ()=> console.log('Example app listening on port 3000!') );











