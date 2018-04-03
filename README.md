# compleet.ai

compleet.ai is a cutting edge todo list application that utilizes natural language processing and artificial intelligence to automatically sort data into specific categories. Users can add new items, re-categorize, check off, and delete items, as demonstrated in the GIF below:

![User Actions GIF](https://github.com/bartleyjulia/SMARTlist/blob/master/docs/compleetiouseractions.gif)




Todo list items are composed by the user, and stored in a a SQL database (Postgres), where they are attached to categorizes and sorted based on completion.

## Getting Started

- Clone compleet.ai respository
- Install all dependencies (using the "npm install" command).
- Run command "knex migrate:latest" to populate SQL database tables.
- Run command "knex seed:run" to populate SQL dataset into the database tables created in the last step.
- Using node.js, run "npm run local" in the compleet.ai directory.
- On your browser, use the URL "http://localhost:8080" to access compleet.ai

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- Bayes 0.07
- Bootstrap 4.0.0
- Dotenv 2.0.0
- EJS 2.4.1
- Express 4.13.4
- Flexbox 0.0.3
- Knex 0.11.7
- Knex-logger 0.1.0
- Morgan 1.7.0
- Node-sass-middleware 0.9.8
- PG 6.0.2
- Yelp-fusion 2.0.3
- Nodemon 1.14.12
