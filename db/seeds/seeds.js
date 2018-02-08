exports.seed = function(knex, Promise) {

      return Promise.all([
        knex('categories').insert({ category: 'watch' }),
        knex('categories').insert({ category: 'eat' }),
        knex('categories').insert({ category: 'buy' }),
        knex('categories').insert({ category: 'read' }),
        knex('categories').insert({ category: 'done' }),
        knex('users').insert({ name: 'Alice', email: 'alice@alice.com', password: 'alice'}),
        knex('users').insert({ name: 'Bob', email: 'bob@bob.com', password: 'bob'}),
        knex('users').insert({ name: 'Steve', email: 'steve@steve.com', password: 'steve'})
      ])

    .then(function () {
      return Promise.all([
        knex('user_lists').insert({ list_item: 'Shrek', user_id: '1', category_id: '1'}),
        knex('user_lists').insert({ list_item: 'Tonka Beans', user_id: '3', category_id: '2'})
    ]);
    });
    };