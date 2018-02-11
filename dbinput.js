require('dotenv').config();
const bayes = require('bayes');
const classifier = bayes();

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

// LEARN MOVIE
classifier.learn('movie, show, tv, screen, cinema, netflix, action, drama, sci-fi, starwars', '1');
classifier.learn('theatre, showtime, watch, see, series, show, comedy, act, funny, comedy, action', '1');
classifier.learn('movie-theatre, cineplex, celebrity, movies, t v, t.v., shows, cartoon', '1');
classifier.learn('the, lord of the rings, the rock, directed, director, film, screen, anime', '1');

// LEARN READ
classifier.learn('book, read, novel, chapter, reading, magazine', '4');
classifier.learn('book, author, by, paper, album, booklet, textbook, print, fiction, edition', '4');

// LEARN EAT
classifier.learn('eat, try, lunch, dinner, breakfast, brunch, go to, food, pizza, burger, kitchen, taste, restaurants, bar, cafeteria, coffee', '2')
classifier.learn('eat, diner, grill, eatery, pizzeria, cafe, eating, fast-food, lunch, tavern', '2')
classifier.learn('eat, cook, cooking, bake, fry, fries, cusine, bread, meal, meat, snack, bite, eats, menu', '2')
classifier.learn('cactus, salad, chinese, butcher, knife, fork, deep-fried, deep fried, oven, hungry', '2')

// LEARN BUY
classifier.learn('purchase, buy, get, find, shop, shopping, mall, store, where, bag, online, amazon', '3');
classifier.learn('purchase, order, aquire, source, shop, shopping, mall, store, where, bag, online, amazon', '3');

// LEARN OTHER
classifier.learn('help, call, check, text, find, pay', '5');
classifier.learn('phone, call, return, run, remember to, remember', '5');

function categorizeInput(input) {
  let inputLower = input.toLowerCase();
  let category = classifier.categorize(input);
  return(category);
};

function saveInputToDatabase(input) {
  let inputCategory = categorizeInput(input);
  const newItem = { list_item: input, user_id: 1, category_id: inputCategory, completed: false};
  const promise = new Promise( function(resolve, reject) {
  knex.insert(newItem).into('user_lists').asCallback(function(err, result ){
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve();
      console.log('Inserted!');
    });
  });
  return promise;
}
exports.saveInputToDatabase = saveInputToDatabase;