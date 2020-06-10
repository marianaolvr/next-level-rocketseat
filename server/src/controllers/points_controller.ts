import { Request, Response } from 'express';
import knex from '../database/connection';


class PointsController {
    async create(request: Request, response: Response) {
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

        //tratando os dois inserts com transaction
        const trx = await knex.transaction();


        const insertedIds = await trx('points').insert({
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        });

        //relacionamento com tabela point_items
        const point_id = insertedIds[0];

        const pointItems = items.map((items_id: number) => {
            return {
                items_id,
                point_id,
            }
        })

        await trx('point_items').insert(pointItems);

        return response.json({ sucess: true });
    }

}

export default PointsController;