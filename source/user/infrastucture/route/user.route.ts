import { Router } from 'express';
import { UserUseCase } from '../../application/userUseCase';
import { UserController } from '../controller/user.controller';

import { MongoRepository } from '../repository/mongo.repository';

const route = Router();

/*      start repository        */
const dbRepository = new MongoRepository();

/*     start use case        */
const userUseCase = new UserUseCase(dbRepository);

/*      start user controller       */

const userController = new UserController(userUseCase);

route
    .post('/user', userController.insertController)
    .get('/user/:id', userController.getController)

export default route;