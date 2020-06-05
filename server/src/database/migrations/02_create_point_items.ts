import Knex from 'knex';


export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', table =>{
    table.increments('id').primary();

    table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');
// Criar uma chave estrangeira na tabela points no campo id
//Todo point_id precisa ter um id válido dentro da tabela point

    table.integer('items_id')
        .notNullable()
        .references('id')
        .inTable('items');

});
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items');

}