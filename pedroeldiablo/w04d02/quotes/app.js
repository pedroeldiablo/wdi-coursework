const express        = require('express');
const app            = express();
const port           = process.env.PORT || 8000;
const router         = require("./config/routes");
const bodyParser     = require("body-parser");
const morgan         = require('morgan');
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");

app.use(morgan('dev'));

app.set("views", `${__dirname}/views`);

app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/public`));


app.use(bodyParser.urlencoded({ extended: true }));

// Use methodOverride
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === "object" && "_method" in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(expressLayouts);

// app.get('/', (req, res) => res.render('index'));

app.use("/", router);

app.listen(port, () => console.log(`Running on port: ${port}`));
