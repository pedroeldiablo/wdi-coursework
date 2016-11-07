const express    = require("express");
const morgan     = require("morgan");
const bodyParser = require("body-parser");
const mongoose   = require("mongoose");
const router     = require("./config/routes");
const port       = process.env.PORT || 8000;
const app        = express();

const dbName = process.env.NODE_ENV === 'test' ? 'referenced-yearbook-test' : 'referenced-yearbook';
mongoose.connect(`mongodb://localhost/${dbName}`);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);
app.listen(port, () => {
  console.log(`App listening on port: ${port} 🎉`);
});

module.exports = app;
