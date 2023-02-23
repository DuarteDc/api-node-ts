"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userUseCase_1 = require("../../application/userUseCase");
const user_controller_1 = require("../controller/user.controller");
const mongo_repository_1 = require("../repository/mongo.repository");
const route = (0, express_1.Router)();
/*      start repository        */
const dbRepository = new mongo_repository_1.MongoRepository();
/*     start use case        */
const userUseCase = new userUseCase_1.UserUseCase(dbRepository);
/*      start user controller       */
const userController = new user_controller_1.UserController(userUseCase);
route
    .post('/user', userController.insertController)
    .get('/user/:id', userController.getController);
exports.default = route;
//# sourceMappingURL=user.route.js.map