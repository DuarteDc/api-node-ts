import 'dotenv/config';
import express from 'express';
import cors from 'express';

import dbConnection from './source/user/infrastucture/db/mongo';

import UserRoter from './routes/UserRouter';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use(UserRoter)

dbConnection().then();

app.listen(port, () => console.log('API clean code and clean arquitecture v1'));


