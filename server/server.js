const express = require('express');
const app = express();
const port = 3004;
const bodyParser = require('body-parser');
const db = require('../database/mongoose.js');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/test', (req, res) => res.send('Hello World!'));

app.get('/popular-dishes', (req, res) => {
  db.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result).status(200);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
