"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (getListItemData) => {

  router.get("/", (req, res) => {
    getListItemData()
    .then(function(datum){
      console.log('Successful GET request');
      res.render('index.ejs', { datum: datum } );

    })
    .catch(function (err){
        throw err;

    });
  });

  router.post("/", (req, res) => {
    console.log(req.is('json'));
    // Pseudo code for receivng text input from '/'
    console.log("Successful POST request", req.body);
    // console.log(req);
    // send the text data to the database

    // re render '/'
    res.redirect('/');

  });

  return router;
};
