const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const apiRouter = require('./server/api');
app.use('/api', apiRouter);

module.exports = app;
