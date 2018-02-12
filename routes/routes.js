"use strict";

const express = require('express');
const router  = express.Router();



module.exports = (getListItemData, saveInputToDatabase, deleteItemFromDatabase, updateCategoryID, wordConverter, findPhoneNumber)=> {

  router.get("/", (req, res) => {
    getListItemData()
    .then(function(datum){
      console.log('Successful GET request');
      res.render('index.ejs', { datum: datum } );
      console.log(datum);
    findPhoneNumber()
    .then(function(data) {
      console.log('Successful Phone request: ', data);
      res.render('index.ejs', { data: data });
    })
    })
    .catch(function (err){
        throw err;
    });
  });

  router.post("/", (req, res) => {
    // Pseudo code for receivng text input from '/'
    const item = req.body['input_list_item'];
    if (!item) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }
    saveInputToDatabase(item);
    // console.log(req);
    // send the text data to the database

    // re render '/'
    res.redirect('/');

  });




  router.post("/delete/:itemID", (req, res) => {
    // NOT DONE **** CHECK variable names/ PROCESS
    console.log("AJAX request Received");
    console.log("This is req in routes after post", req.params.itemID);
    let input = req.params.itemID;
    deleteItemFromDatabase(input);



    res.redirect('/');

  });

  router.post("/edit/:id", (req, res) => {
    let itemID = req.body.datum.itemID;
    // let word = req.body.datum.category_id;
    console.log(req.body.datum.category_id);
    let newCategoryID = wordConverter(req.body.datum.category_id);
    console.log(newCategoryID);

    console.log("Ajax call received");
    updateCategoryID(itemID, newCategoryID);


    res.redirect('/');

  });
  return router;
};