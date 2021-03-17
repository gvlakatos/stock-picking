const connection = require('../database/connection'); // Importa configurações para fazer operações no banco de dados

module.exports = {
    async index(request, response) {
        const { page = 1} = request.query;

        // O retorno será um array, portanto utilizo os '[]' para pegar somente a primeira posição do retorno da query
        const [count] = await connection('stocks')
            .count();

        const stocks = await connection('stocks')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');

        response.header('X-Total-Count', count['count(*)']);
    
        return response.json(stocks);
    },

    async create(request, response) {
        const { ticker, company, value,  } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('stocks').insert({
            ticker,
            company,
            value,
            user_id
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const stock = await connection('stocks')
            .where('id', id)
            .select('user_id')
            .first();
                            
        if (stock.user_id != user_id) {
            return response.status(401).json({error: 'Operation not permitted'});
        }

        await connection('stocks').where('id', id).delete();

        return response.status(204).send();
    }
}