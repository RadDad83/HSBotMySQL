var Sequelize = require('sequelize');

var sequelize = new Sequelize('mainDB', null, null, {
    dialect: "sqlite",
    storage: './db/highscores.sqlite',
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });