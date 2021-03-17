// Importação da funcionalidade do express (gerenciamento de rotas)
const express = require('express'); // A variável 'express' contém todas as funcionalidades do pacote express
const cors = require('cors');
const routes = require('./routes'); // Importa a rotas da aplicação

const app = express(); // Inicialização da aplicação

app.use(cors());

// Define o formato em que as requisições serão feitas. Necessário ser declarado antes de qualquer requisição
app.use(express.json());

// Define que a aplicação utilizará as rotas definidas no arquivo importado
app.use(routes);

/*
    Métodos HTTP:
    GET: buscar/listar uma informação do back-end
    POST: criar uma informação no back-end
    PUT: alterar uma informação no back-end
    DELETE: excluir uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * query params: parâmetros nomeados enviados na rota após o símbolo de '?' (utilizados para filtros, paginação) 
 * route params: parâmetros utilizados para identificar recursos 
 * request body: corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Banco de Dados:
 * SQL: mySQL, SQLite (usaremos esse), PostreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB
 * 
 * Comunicação do banco de dados:
 * Driver: SELECT * FROM users
 * Query Builder (usaremos esse): table('users').select(*).where() // Escrito utilizando javascript
 * 
 * Instalação do Knex (pacote de comunicação do banco de dados):
 * 1. Instalação do Knex: npm install knex
 * 2. Instalação do driver: npm install sqlite3
 * 3. Fazer conexão com banco de dados: npx knex init (cria o arquivo knexfile.js que fica armazenado as configurações de acesso ao banco de dados para cada um dos ambiente de aplicação)
 */

// TRECHO COPIADO PARA O ARQUIVO ROUTES.JS
// // Definição da rota
// app.get('/users', (request, response) => {
//     const params = request.query; // Lista todos os parâmetros que vierem na requisição (query params)
//     // const params = request.params; // Lista todos os parâmetros que vierem na requisição (route params)
//     // const params = request.body; // Lista todos os parâmetros que vierem na requisição (request body)

//     console.log(params);

//     // return response.send('Hello world'); // Retorno em formato de texto
//     return response.json({
//         event: 'Stock Picking',
//         user: 'Gabriel'
//     })
// });

app.listen(3333); // Define que a aplicação deve 'ouvir' a porta 3333