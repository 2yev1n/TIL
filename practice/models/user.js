const sequelize = require("sequelize");

module.exports  = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        email: {
            type: DataTypes.STRING(40),
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(30),
            allowNUll: false
        }
    });
};