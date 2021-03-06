
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

function getListItemData() {

  const promise = new Promise( function(resolve, reject) {
    // FUNCTIONS FOR SPECIFYING DATA TO BE EXTRACTED
    function completed(param) {
      let status = param['completed'];
      return status
    }

    function getListItem(param) {
      let listItem = param['list_item'];
      return listItem;
    }

    function getCategory(param) {
      let category = param['category_id'];
      return category;
    }

    function getID(param) {
      let itemID = param['id'];
      return itemID;
    }
    // QUERY FOR SELECTING ITEMS
    knex.select('*').from('user_lists').asCallback(function (err, result){
      if (err) {
        return reject(err);
      }
      // OBJECT TO HOLD DATA RETRIEVED FROM DATABASE
      const datum = {};
      for (var item of result) {
        let a = getListItem(item);
        let b = getCategory(item);
        let c = getID(item);
        let d = completed(item);

        if (datum[b] === undefined) {
        datum[b] = [];
        }
        datum[b].push({list_item: a , category_id: b, item_id: c, completed: d });
      }
      resolve(datum);
    });
  });
  return promise;

}

getListItemData();


exports.getListItemData = getListItemData;
