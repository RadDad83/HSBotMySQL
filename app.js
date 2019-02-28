var db  = require('./models');

db.sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });



  db.Bowler.findOrCreate({where: {First: 'David', Last: "Radtke", Gender: "Male"}, })
  .spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
    console.log(user.id)})
