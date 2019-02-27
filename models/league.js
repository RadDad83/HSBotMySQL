module.exports = (sequelize, type) => {
    return sequelize.define('league',{
        id: { type: type.INTEGER, allowNull: false, autoIncrement: true},
        Name: {type: type.STRING, allowNull: false}
    });
}