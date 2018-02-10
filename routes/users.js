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
    // Code for receivng text input from input form
    const item = req.body['input_list_item'];
    // send the text data to the database
    saveInputToDatabase(item);

    res.redirect('/');

  });

  router.post("/delete/:id", (req, res) => {
    // NOT DONE **** CHECK variable names/ PROCESS

    {
    deleteItemFromDatabase(item_identifier);
    }

     res.redirect('/');

  });

  router.post("/edit/:id", (req, res) => {
    // NOT DONE **** CHECK variable names
    new_category = req.body.category;
    item_id = req.params.id;
    {
    deleteItemFromDatabase(item_identifier);
    }
     res.redirect('/');

  });


  return router;
};
