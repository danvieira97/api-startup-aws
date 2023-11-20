const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const route = require('./routes/route');

app.use(bodyParser.json());

app.use('/', route);

module.exports = app;