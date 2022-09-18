
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const { Calculs } = require('./schema/CalculSchema.js');

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
    const newCalcul = new Calculs({
        calcul: req.body.calcul,
        result: req.body.total,
    });

    newCalcul
        .save()
        .then(() => {
            Calculs.find({}, function (err, table) {
                return res.send(table);
            });
        })
        .catch((err) => console.log(err));
});

app.post('/api/delete-data', (req, res) => {
    Calculs.findByIdAndDelete(req.body.id, function (err, arr) {
        Calculs.find({}, function (err, table) {
            res.send(table);
        });
    })
});