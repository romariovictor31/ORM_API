const Sequelize = require('sequelize');
const database = require('../db.js');
const sequelize = require('sequelize');
const { STRING } = require('sequelize');
const schema = "";

class Produto extends Sequelize.Model{}

Produto.init(
    {//TABLE COLUMNS
        Codigo: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Descricao: {
            type: sequelize.STRING,
            allowNull: true
        },
        DataCriacao: {
            type: sequelize.DATE,
            allowNull: false
        },
        DataAtualizacao: {
            type: sequelize.DATE,
            allowNull: true
        }
    },
    {                          
        sequelize: database, modelName: 'tbProduto', schema
    }
);

module.exports = Produto;