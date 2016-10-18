const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');

const router = require('./config/routes');

const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.use(expressLayouts);



app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride((req, res) => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body){
    let method =req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use('/', router);

app.listen(port, () => console.log(`Running on port: ${port}`));
