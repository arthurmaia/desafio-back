import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import 'express-async-errors';

import routes from './routes';

const app = express();

async function run() {
  await connect(
    'mongodb+srv://arthurmds:arthurmds123@cluster0.mekd3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  );

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  app.listen(process.env.PORT || 3333, () => {
    console.log('🚀 Server started on port 3333!');
  });
}

run();
