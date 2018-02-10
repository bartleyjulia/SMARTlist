"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (getListItemData, saveInputToDatabase) => {

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
    // Pseudo code for receivng text input from '/'
    const item = req.body['input_list_item'];
    saveInputToDatabase(item);
    // console.log(req);
    // send the text data to the database

    // re render '/'
    res.redirect('/');

  });

  return router;
};
