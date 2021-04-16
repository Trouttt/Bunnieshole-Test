/* eslint-disable no-console */
import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect('mongodb://localhost:27017/bunnies', { useNewUrlParser: true })
    .then(() => {
      return console.info(`Successfully connected`);
    })
    .catch(error => {
      console.log(error);
    });
};

export default connect;
