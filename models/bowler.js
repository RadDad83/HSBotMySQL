module.exports = (sequelize, type) => {
    var Bowler = sequelize.define('Bowler', {
        id: {
            type: type.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        First: {
            type: type.STRING,
            allowNull: false
        },
        Last: {
            type: type.STRING,
            allowNull: false
        },
        Gender: {
            type: type.STRING,
            allowNull: false
        },
    });

    Bowler.associate = function (models) {
        models.Bowler.hasMany(models.game);
    };

    return Bowler;

}