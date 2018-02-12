//API KEY = JEnpW-r-Sg1t8IUBJbawAPp8Kxs5na6yaq1btX68qO1yLQ00Ydy5mglzwrzISKB80C043n_BSH1Eax7GlL9HHxunjlyfMJu-KQlYGJRWnc1epcaHwKljcK9CFQCAWnYx
'use strict';

const yelp = require('yelp-fusion');

// NEED TO MOVE API KEY OUT INTO SECRET FOLDER
const client = yelp.client('JEnpW-r-Sg1t8IUBJbawAPp8Kxs5na6yaq1btX68qO1yLQ00Ydy5mglzwrzISKB80C043n_BSH1Eax7GlL9HHxunjlyfMJu-KQlYGJRWnc1epcaHwKljcK9CFQCAWnYx');

let bbq = 'China Town BBQ';

function findPhoneNumber(name) {
  let phone = client.search({
    term: name,
    location: 'vancouver, bc'
  })
  .then((dataset) => {
    var decodedJSON = JSON.parse(dataset.body);
    return decodedJSON.businesses[0].phone;
    // return // some crazy promise of just the phone number
  });
  // console.log("phone:", phone)
  return phone;
}

// findPhoneNumber('Revolver')
// .then((result) => {
//   // var decodedJSON = JSON.parse(result.body);
//   // // console.log(decodedJSON);
//   // console.log(decodedJSON.businesses[0].phone);
//   console.log("result:", result)
// })
// .catch((err) => {
//   console.log("no.  no.  no god no.  please god no.  noooooooooooo!!!!!!")
// })


// function findPhoneNumber(name) {
//   // const promise = new Promise( function(resolve, reject) {
//     let phone = client.search({
//       term: 'cactus club',
//       location: 'vancouver, bc'
//     }).then(function(result) {
//       if (result) {
//         console.log(result.jsonBody.businesses[0].phone);
//         console.log('Phone Number')
//       }
//     });
//   // });
// }


// function findPhoneNumber(name) {
//   let phone = client.search({
//     term: name,
//     location: 'vancouver, bc'
//   }).then(response => {
//     let data = response.jsonBody.businesses[0].phone;
//     console.log('In EAT API File: ', data);;
//   });
// }


// function findRating(name) {
//   let rating = client.search({
//     term: name,
//     location: 'vancouver, bc'
//   }).then(response => {
//     let data = response.jsonBody.businesses[0].rating;
//     console.log(data);
//   });
// }

// function findAddress(name) {
//   let address = client.search({
//     term: name,
//     location: 'vancouver, bc'
//   }).then(response => {
//     let data = response.jsonBody.businesses[0].location.address1;
//     console.log(data);
//   });
// }

// function findPrice(name) {
//   let price = client.search({
//     term: name,
//     location: 'vancouver, bc'
//   }).then(response => {
//     let data = response.jsonBody.businesses[0].price;
//     console.log(data);
//   });
// }

// function findURL(name) {
//   let url = client.search({
//     term: name,
//     location: 'vancouver, bc'
//   }).then(response => {
//     let data = response.jsonBody.businesses[0].url;
//     console.log(data);
//   });
// }

// function findImage(name) {
//   let price = client.search({
//     term: name,
//     location: 'vancouver, bc'
//   }).then(response => {
//     let data = response.jsonBody.businesses[0].image_url;
//     console.log(data);
//   });
// }

// function findEatData(name) {
//   findPhoneNumber(name);
//   findRating(name);
//   findAddress(name);
//   findPrice(name);
//   findURL(name);
//   findImage(name);
// };

exports.findPhoneNumber = findPhoneNumber;

// findEatData(bbq);

// module.exports = { findPhoneNumber: findPhoneNumber, findRating: findRating, findAddress: findAddress, findPrice: findPrice, findURL: findURL, findImage: findImage};
