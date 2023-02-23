"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const route = (0, express_1.Router)();
route
    .get('/user', UserController_1.getUser)
    .post('/user', UserController_1.insertUser);
exports.default = route;
//# sourceMappingURL=UserRouter.js.map