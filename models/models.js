var Sequelize = require('sequelize');

var sequelize = new Sequelize('mainDB', null, null, {
    dialect: "sqlite",
    storage: './db/highscores.sqlite',
});

const League = sequlize.define('league',{
    id: { type: Sequelize.INTEGER, allowNull: false, }
});