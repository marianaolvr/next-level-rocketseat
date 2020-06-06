import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');
    // SELECT * FROM items

    const serializedItems = items.map( item => {
        return {
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        }; 
    })

    return response.json(serializedItems);
});


routes.post('/points', async (request, response) =>{

    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

   const ids = await knex('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    });

const pointItems = items.map((items_id: number) => {
    return {
        items_id,
        point_id: ids[0]
    }
})

await knex('point_items').insert(pointItems);

    return response.json({ sucess: true });
});






export default routes;
