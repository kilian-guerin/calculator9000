
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const { Calculs, newCalcul } = require('./schema/CalculSchema.js');

const uri = "mongodb+srv://aerox:Tavernes83@cluster0.v5aws.mongodb.net/calculatrice?retryWrites=true&w=majority";

const database = uri;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("database is connected."))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.get('/api/get-data', (req, res) => {
    Calculs.find({}, function (err, arr) {
        res.send(arr);
    });
});

app.post('/api/send-data', (req, res) => {
    newCalcul(req.body)
});