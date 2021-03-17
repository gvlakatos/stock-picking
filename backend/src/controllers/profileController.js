const connection = require('../database/connection'); // Importa configurações para fazer operações no banco de dados

module.exports = {
    async index(request, response) {
        const user_id = request.headers.authorization;

        const stock = await connection('stocks')
            .where('user_id', user_id)
            .select('*');

        return response.json(stock);
    }
}