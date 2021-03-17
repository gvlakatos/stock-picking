exports.up = function(knex) {
    return knex.schema.createTable('stocks', function (table) {
        table.increments();

        table.string('ticker').notNullable();
        table.string('company').notNullable();
        table.decimal('value').notNullable();
        
        table.string('user_id').notNullable();
        
        // Define a chave estrangeira da tabela de usuários
        table.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('stocks');
};
