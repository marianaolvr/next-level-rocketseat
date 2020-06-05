import express from 'express';
const app = express();
app.use(express.json());



const users = [
    'mariana',
    'andré',
    'poliana',
    'letícia',
];



//Listar os usuários
app.get('/users', (request, response) => {
    console.log('listagem de usuários');
    return response.json(users);

});


//listar os usuários com query
app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

//pegar um usuário pelo id
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
});

// criar um usuário
// app.post('/users', (request, response) => {
//     const user = {
//         name: 'Mariana',
//         email: 'mariana@mariana.com.br'
//     };

//     return response.json(user);
// });


app.post('/users', (request, response) => {
    const data = request.body;
    console.log(data);

    const user = {
        name: 'Mariana',
        email: 'mariana@mariana.com.br'
    };

    return response.json(user);
});


app.listen(3333);