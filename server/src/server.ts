/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import connect from './services/CreateConnectionService';

connect(); // conectando com o mongodb

const app = express();

app.get('/', (request, response) => response.json({ message: 'heloworld' }));
app.listen(3333, () => console.log('oi'));
