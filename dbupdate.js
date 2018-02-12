require('dotenv').config();

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    port     : process.env.DB_PORT,
    ssl      : process.env.DB_SSL
  }
});



function deleteItemFromDatabase(item_identifier) {
  const promise = new Promise( function(resolve, reject) {
    knex("user_lists").where("list_item", item_identifier).del().asCallback(function(err, result ){
       if (err) {
        console.log(err);
        return reject(err);
      }
      resolve();
      console.log('IN routes Deleted!');
    });

  });
  return promise;
}

exports.deleteItemFromDatabase = deleteItemFromDatabase;

function updateCategoryID(itemID, newCategoryID, completeness) {
  console.log(itemID);
  console.log(newCategoryID);

  const promise = new Promise( function(resolve, reject) {
    knex("user_lists")
      .where('list_item', itemID)
      .update({'category_id': newCategoryID, 'completed': completeness})
      .asCallback(function(err, result ){
        if (err) {
          console.log(err);
          return reject(err);
        }
        resolve();
        console.log('Updated!');
      });
  });
  return promise;
  console.log

}


function wordConverter(input) {
  let numValue = 0;
  if (input === 'Watch') {
    numValue = 1;
  }
  if (input === 'Read') {
    numValue = 4;
  }
  if (input === 'Buy') {
    numValue = 3;
  } if (input === 'Eat') {
    numValue = 2;
  } if (input === 'Other') {
    numValue = 5;
  }
  return numValue;
}

function valueConverter(input) {
  let result = false;
  if (input === 'Yes') {
    result = true;
  }

  return result;
}

exports.wordConverter = wordConverter;
exports.valueConverter = valueConverter;

exports.updateCategoryID = updateCategoryID;
