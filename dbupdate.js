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


