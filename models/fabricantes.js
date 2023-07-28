const { DataTypes } = require('sequelize');
const database = require('../config/config');

const Fabricante = database.define('fabricantes', {
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

// Adicionar 1:N entre Fabricante e Produto
Fabricante.hasMany(database.models.Produto, {
  foreignKey: 'fabricanteId', //Chave estrangeira que será criada na tabela de produtos
  onDelete: 'CASCADE', // Define o comportamento de exclusão em cascata
  onUpdate: 'CASCADE', // Define o comportamento de atualização em cascata
});

module.exports = Fabricante;