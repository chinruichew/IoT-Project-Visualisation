const express = require('express');
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.static('public'));
app.use(express.static('data'));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/getSlopeData', async(req, res) => {
    fs.readFile('./data/slopes.json', 'utf8', function (err, data) {
        if (err) throw err;
        res.send(JSON.parse(data));
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);