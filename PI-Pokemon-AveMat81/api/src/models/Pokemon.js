const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      //allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    imagen: {
      type :DataTypes.STRING,
      allowNull: false
    },
    vida: {
      type :DataTypes.INTEGER,
      allowNull: false
    },
    ataque: {
      type :DataTypes.INTEGER,
      allowNull: false
    },
    defensa: {
      type :DataTypes.INTEGER,
      allowNull: false
    },
    velocidad: {
      type :DataTypes.INTEGER,
      allowNull: false
    },
    altura: {
      type :DataTypes.INTEGER,
      allowNull: false
    },
    peso: {
      type :DataTypes.INTEGER,
      allowNull: false
    }
  },
    { timestamps: false });
};
