import knex from 'knex';
import path from 'path';
// path é uma biblioteca nativa do node que lida com os caminhos - padrozina



const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    
    useNullAsDefault: true,
});

export default connection;


// filename: arquivo que armazena o arquivo do DB
// __dirname: é uma variável global que vai retornar o diretório do arquivo que estamos executando
// database.sqlite é a pasta que eu quero criar


// // points (pontos de coleta) {
//     Image
//     name
//     email
//     whatsapp
//     latitude
//     longitude
//      city
//      uf
// }

// items (itens para coleta) {
//     Image
//     title
// }

// Relacionamento de muitos para muitos (n-n) - gear tabela pivot, 
// que relaciona os pontos de coleta com os itens que ele coleta. Normalmente nome derivado das duas tabelas
// Exemplo point_items (relacionamento dos itens que um ponto de coleta coleta)

// // point_items {
//     point_id 
//     item_id 
// } 
//