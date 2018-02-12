"use strict";

const express = require('express');
const router  = express.Router();

// ALL FUNCTIONS COME FROM VARIOUS FILE STARTING WITH 'db'

module.exports = (getListItemData, saveInputToDatabase, deleteItemFromDatabase, updateCategoryID, wordConverter, findPhoneNumber, valueConverter)=> {

// STANDARD GET REQUEST
  router.get("/", (req, res) => {
    getListItemData()
    .then(function(datum){
      console.log('Successful GET request');
      findPhoneNumber('Revolver')
      .then(function(phoneNumber) {
        console.log('Successful Phone request: ', phoneNumber);
        res.render('index.ejs', { phoneNumber: phoneNumber, datum: datum});
      })
    })
    .catch(function (err){
        throw err;
    });
  });

// POST ROUTE FOR INPUTTING NEW DATA
  router.post("/", (req, res) => {
    const item = req.body['input_list_item'];
    if (!item) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }
    saveInputToDatabase(item);
    res.redirect('/');

  });

// POST ROUTE FOR DELETING ROWS IN DATABASE
  router.post("/delete/:itemID", (req, res) => {
    console.log("AJAX request Received");
    let input = req.params.itemID;
    deleteItemFromDatabase(input);
    res.redirect('/');

  });

//POST ROUTE FOR UPDATING COMPLETION STATUS *AND* RECATEGORIZING
  router.post("/edit/:id", (req, res) => {
    let itemID = req.body.datum.itemID;
    let newCategoryID = wordConverter(req.body.datum.category_id);
    let completed = valueConverter(req.body.datum.completed);
    console.log(completed);
    console.log(req.body.datum.completed);
    console.log("Ajax call received");
    updateCategoryID(itemID, newCategoryID, completed);
    res.redirect('/');

  });
  return router;
};