
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_lists', function (table) {
    table.increments('id');
    table.string('list_item');
    table.date('date_created');
    table.date('date_completed');
  });
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('user_lists');

};
