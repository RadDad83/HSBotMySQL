var Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:./db/highscores.sqlite');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });

const League = sequelize.define('league',{
    id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true},
    Name: {type: Sequelize.STRING, allowNull: false}
});

const Team = sequelize.define('team',{
    id: {type: Sequelize.INTEGER, allowNull:false, autoIncrement:true},
    Name: {type: Sequelize.STRING, allowNull:false},
    league_id: {
        references: {
            // This is a reference to another model
            model: League, 
            // This is the column name of the referenced model
            key: 'id'
          }
    }
});

const Bowler = sequelize.define('bowler',{
    id: {type: Sequelize.INTEGER, allowNull:false, autoIncrement:true},
    First: {type: Sequelize.STRING, allowNull:false},
    Last: {type: Sequelize.STRING, allowNull:false},
    Gender: {type: Sequelize.STRING, allowNull:false},
});

const Game = sequelize.define('game',{
    id: {type: Sequelize.INTEGER, allowNull:false, autoIncrement:true},
    league_id: {
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: League, 
            // This is the column name of the referenced model
            key: 'id'
          }
    },

    bowler_id: {
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: Team, 
            // This is the column name of the referenced model
            key: 'id'
          }
    },

    team_id: {
        type: Sequelize.INTEGER,
        references: {
            // This is a reference to another model
            model: Bowler, 
            // This is the column name of the referenced model
            key: 'id'
          }
    },

    Scratch: {type: Sequelize.INTEGER, allowNull:false},
    Number: {type: Sequelize.INTEGER, allowNull:false},
    Week: {type: Sequelize.INTEGER, allowNull:false},
    Lane: {type: Sequelize.INTEGER, allowNull:false},
    Spares: {type: Sequelize.INTEGER, allowNull:false},
    Strikes: {type: Sequelize.INTEGER, allowNull:false},
    Postition: {type: Sequelize.INTEGER, allowNull:false},
    HDCP: {type: Sequelize.INTEGER, allowNull:false},
    Start: {type: Sequelize.DATE, allowNull:false},
    End: {type:Sequelize.DATE, allowNull:false},
    Date: {type:Sequelize.DATEONLY, allowNull: false}
 
});



