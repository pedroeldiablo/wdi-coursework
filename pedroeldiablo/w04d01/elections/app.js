const express = require('express');
const morgan = require('morgan');

const expressLayouts= require('express-ejs-layouts');
const router= require('./config/routes');
const bodyParser =require('body-parser');


const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(express.static(`$__dirname)/public`));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('index'));

app.use(expressLayouts);
app.use('/', router);

app.listen(port, () => console.log(`Running on port: ${port}`));
