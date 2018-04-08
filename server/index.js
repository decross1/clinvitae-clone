var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/variants', (req, res) => {
  db.getData(req.body.geneName)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log('Get Data Error', err);
    })
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});
