const crypto = require('crypto');
const connection = require('../database/connection'); // Importa configurações para fazer operações no banco de dados

module.exports = {
    async index(request, response) {
        const users = await connection('users')
            .select('*');
    
        return response.json(users);
    },
    
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; // Lista todos os parâmetros que vierem na requisição (request body)

        // Gera uma random string para ser utilizada como ID do usuário
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        // return response.send('Hello world'); // Retorno em formato de texto
        return response.json({ id })
        }
};