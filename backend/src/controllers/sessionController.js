const connection = require('../database/connection'); // Importa configurações para fazer operações no banco de dados

module.exports = {
     async create(request, response) {
        const { id } = request.body;

        const user = await connection('users')
            .where('id', id)
            .select('name')
            .first();

        if (!user) {
            return response.status(400).json({ error: 'No user found with this ID'});
        }

        return response.json(user);
     }
}