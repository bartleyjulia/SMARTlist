exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.string('email');
    table.string('password');
  })
  .then( function(){
    return knex.schema.createTable('categories', function (table) {
    table.increments('id');
    table.string('category');
    });
  })
  .then( function(){
    return knex.schema.createTable('user_lists', function (table) {
    table.increments('id');
    table.string('list_item');
    table.date('date_created');
    table.date('date_completed');
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id');
    table.integer('category_id').unsigned()
    table.foreign('category_id').references('categories.id');
    });
  })
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_lists')
  .then(function (){knex.schema.dropTable('categories')})
    .then(function (){knex.schema.dropTable('users')
});
};
