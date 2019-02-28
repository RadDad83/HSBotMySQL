module.exports = (sequelize, type) => {
    var League = sequelize.define('league', {
        id: {
            type: type.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: type.STRING,
            allowNull: false
        }
    });

    League.associate = function (models) {
        models.league.hasMany(models.Team);
    };

    return League;

}