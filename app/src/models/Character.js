const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Character', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        'Alive',
        'Dead',
        'unknown',
      ),
      allowNull: false,
    },
    genre: {
      type: DataTypes.ENUM(
        'Male',
        'Female',
        'unknown',
      ),
      allowNull: false,
    },
    origin: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
    species: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
      createdInDb:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
  },{
    timestamps: false,
    freezeTableName: true,
  });
};
