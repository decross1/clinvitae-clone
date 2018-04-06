const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index');
const app = express();

app.use(express.static('./'));
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/variants', (req, res) => {
  db.getData()
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