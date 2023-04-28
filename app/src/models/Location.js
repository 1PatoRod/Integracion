const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Location', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{
    timestamps: false,
    freezeTableName: true,
    })
}