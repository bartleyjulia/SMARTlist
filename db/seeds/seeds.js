exports.seed = function(knex, Promise) {

      return Promise.all([
        knex('categories').insert({ category: 'watch' })
          .then( function () {
            return knex('categories').insert({ category: 'eat' })
          .then( function () {
          return knex('categories').insert({ category: 'buy' })
          .then( function () {
          return knex('categories').insert({ category: 'read' })
          .then( function () {
          return knex('users').insert({ name: 'Alice', email: 'alice@alice.com', password: 'alice'})
          })
          })
          })
          })

      ])

    .then(function () {
      return Promise.all([
        knex('user_lists').insert({ list_item: 'Shrek', user_id: '1', category_id: '1', completed: false }),
        knex('user_lists').insert({ list_item: 'Casablanca', user_id: '1', category_id: '1', completed: false }),
        knex('user_lists').insert({ list_item: 'Vertigo', user_id: '1', category_id: '1', completed: false }),
        knex('user_lists').insert({ list_item: 'Cafe Medina', user_id: '1', category_id: '2', completed: false }),
        knex('user_lists').insert({ list_item: 'Homer St Cafe', user_id: '1', category_id: '2', completed: false }),
        knex('user_lists').insert({ list_item: 'The Naam', user_id: '1', category_id: '2', completed: false }),
        knex('user_lists').insert({ list_item: 'Tonka Beans', user_id: '1', category_id: '3', completed: false }),
        knex('user_lists').insert({ list_item: 'Kombucha', user_id: '1', category_id: '3', completed: false }),
        knex('user_lists').insert({ list_item: 'Yoga Mat', user_id: '1', category_id: '3', completed: false }),
        knex('user_lists').insert({ list_item: 'Atlas Shrugged', user_id: '1', category_id: '4', completed: false }),
        knex('user_lists').insert({ list_item: 'The Fountainhead', user_id: '1', category_id: '4', completed: false }),
        knex('user_lists').insert({ list_item: 'The Communist Manifesto', user_id: '1', category_id: '4', completed: true })
    ]);
    });
    };


