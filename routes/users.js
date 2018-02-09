"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (getListItemData) => {

  router.get("/", (req, res) => {
    getListItemData()
    .then(function(datum){
      console.log('Success!');
      res.render('index.ejs', { datum: datum } );

    })
    .catch(function (err){
        throw err;

    });
  });

  router.post("/", (req, res) => {
    // Pseudo code for receivng text input from '/'
    // const text = req.body.'text area'
    // send the text data to the database

    // re render '/'


  });

  return router;
};
