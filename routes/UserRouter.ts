import { Router } from 'express';

import { insertUser, getUser } from '../controllers/UserController';

const route = Router();

route
    .get('/user', getUser)
    .post('/user', insertUser);

export default route;