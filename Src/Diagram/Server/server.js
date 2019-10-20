'use strict';

let uuid = require('uuid/v4');
let express = require('express');
let app = express();
const diagrams = {};

app.use(express.json());
app.use(express.static('.\\Src\\Diagram\\Client'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/save-diagram', function(req, res) {
  const id = req.param('id');
  res.send(diagrams[id]);
});

app.post('/save-diagram', function (req, res) {
  const id = uuid();
  diagrams[id] = req.body;
  res.send(id);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
