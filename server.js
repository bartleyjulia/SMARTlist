"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// FILES THAT CONTAIN FUNCTIONS TO CONVERT AND RETRIEVE DATA
const dbinput = require("./dbinput.js");
const dbconnection = require("./dbconnection.js");
const dbupdate = require("./dbupdate.js");

// API
const yelp = require('./public/scripts/eatapi');

const usersRoutes = require("./routes/routes")(dbconnection.getListItemData, dbinput.saveInputToDatabase, dbupdate.deleteItemFromDatabase, dbupdate.updateCategoryID, dbupdate.wordConverter, yelp.findPhoneNumber, dbupdate.valueConverter);

app.use(morgan('dev'));

app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// SPECIFIES MAIN ROUTE AND PASSES COLLECTED FUNCTIONS TO THE FILE
app.use("/", usersRoutes);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
