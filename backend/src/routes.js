const express = require('express');

// COPIADOS PARA O ARQUIVO USERCONTROLLER
// const crypto = require('crypto');
// const connection = require('./database/connection'); // Importa configurações para fazer operações no banco de dados
const sessionController = require('./controllers/sessionController');
const userController = require('./controllers/userController');
const profileController = require('./controllers/profileController');
const stockController = require('./controllers/stockController');

const routes = express.Router(); // Desacopla o módulo de rotas do express, atribuindo a função para a variável routes

// Definição da rota
// ASYNC-AWAIT: o comando 'async' define uma função como assíncrona no qual ela irá aguardar a execução do bloco declarado no 'await' finalizar para prosseguir com a execução da função

// COPIADOS PARA O ARQUIVO USERCONTROLLER
// routes.get('/users', async (request, response) => {
//     const users = await connection('users').select('*');

//     return response.json(users);
// });

// COPIADOS PARA O ARQUIVO USERCONTROLLER
// routes.post('/users', async (request, response) => {
//     // const params = request.query; // Lista todos os parâmetros que vierem na requisição (query params)
//     // const params = request.params; // Lista todos os parâmetros que vierem na requisição (route params)
//     // const params = request.body; // Lista todos os parâmetros que vierem na requisição (request body)
    
//     // const data = request.body; // Lista todos os parâmetros que vierem na requisição (request body)
//     // console.log(data);

    
//     // Desestruturação dos dados enviados para trabalhar com cada dado de forma separada
//     // const { name, email, whatsapp, city, uf } = request.body; // Lista todos os parâmetros que vierem na requisição (request body)

//     // // Gera uma random string para ser utilizada como ID do usuário
//     // const id = crypto.randomBytes(4).toString('HEX');

//     // await connection('users').insert({
//     //     id,
//     //     name,
//     //     email,
//     //     whatsapp,
//     //     city,
//     //     uf
//     // })

//     // // return response.send('Hello world'); // Retorno em formato de texto
//     // return response.json({ id })
// });

routes.post('/sessions', sessionController.create);

routes.get('/users', userController.index);
routes.post('/users', userController.create);

routes.get('/profile', profileController.index);

routes.get('/stocks', stockController.index);
routes.post('/stocks', stockController.create);
routes.delete('/stocks/:id', stockController.delete);

// Deixa as rotas disponíveis para que o arquivo 'index.js' possa importar essas configurações
module.exports = routes;