
exports.up = function(knex, Promise) {
  return knex.schema.table('user_lists', function (table) {
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id');
      table.integer('category_id').unsigned();
    table.foreign('category_id').references('categories.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropForeign('user_lists');

};
