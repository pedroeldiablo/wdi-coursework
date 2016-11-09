const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/infamous-criminals');

const routes = require('./config/routes');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));

app.use(routes);

app.listen(8000, () => console.log('🏃 🕵 👮 port 8000'));