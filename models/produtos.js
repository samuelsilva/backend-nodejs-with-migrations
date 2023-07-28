const { DataTypes } = require('sequelize');
const database = require('../config/config');

const Produto = database.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{ 
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  {
    timestamps: true, // Habilita os campos createdAt e updatedAt
  }
);

module.exports = Produto;