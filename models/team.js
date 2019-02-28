'use strict';
module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Team.associate = function (models) {
        models.Team.belongsTo(models.league, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        models.Team.hasMany(models.game);
    };

    return Team;
}