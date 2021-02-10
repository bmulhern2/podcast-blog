const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');

const api = require('./routes/router');

mongoose.connect('mongodb+srv://bmulhern2:Bmole22%21%21@cluster0.eopst.mongodb.net/blog23534?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("DB Connected");
    };
});

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../build')));

app.use('/api', api);

const server = http.createServer(app);

server.listen(8080);