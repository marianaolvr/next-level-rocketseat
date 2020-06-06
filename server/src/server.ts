import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '.', 'uploads')));
// express.static = servir arquivos estáticos de uma pasta específica



app.listen(3333);

