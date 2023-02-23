"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const UserRouter = (0, express_1.Router)();
UserRouter.get('/', UserController_1.getAllUsers);
exports.default = UserRouter;
//# sourceMappingURL=UserRoutes.js.map