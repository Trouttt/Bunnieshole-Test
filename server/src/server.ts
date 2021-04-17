/* eslint-disable no-console */
import express from 'express';
import connect from './services/database/CreateConnectionService';
import routes from './routes/index';

connect(); // conectando com o mongodb

const app = express();

app.use(express.json());
app.use('/', routes);

app.listen(3333, () => console.log('Server on'));
