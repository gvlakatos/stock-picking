const knex = require('knex');
const configuration = require('../../knexfile'); // Importa as configurações do banco de dados

// Criação da conexão com o banco de dados
const connection = knex(configuration.development);

module.exports = connection;