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

knex('user_lists')
  .insert({ list_item: /** from text input**/, user_id: 1, category_id:/* from categorizer/algorithm/slection box?*/, completed: false}).asCallback(function(err, result ){
    if (err) {
      return console.error("error running query", err);
    }

  console.log('Inserted!!!!');

  })