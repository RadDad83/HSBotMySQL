module.exports = (sequelize, type) => {

    var Game = sequelize.define('game', {
        id: {
            type: type.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Scratch: {
            type: type.INTEGER,
            allowNull: false
        },
        Number: {
            type: type.INTEGER,
            allowNull: false
        },
        Week: {
            type: type.INTEGER,
            allowNull: false
        },
        Lane: {
            type: type.INTEGER,
            allowNull: false
        },
        Spares: {
            type: type.INTEGER,
            allowNull: false
        },
        Strikes: {
            type: type.INTEGER,
            allowNull: false
        },
        Postition: {
            type: type.INTEGER,
            allowNull: false
        },
        HDCP: {
            type: type.INTEGER,
            allowNull: false
        },
        Start: {
            type: type.DATE,
            allowNull: false
        },
        End: {
            type: type.DATE,
            allowNull: false
        },
        Date: {
            type: type.DATEONLY,
            allowNull: false
        }
    });

    Game.associate = function (models) {
        models.game.belongsTo(models.Team, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });

        models.game.belongsTo(models.Bowler, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Game;
}