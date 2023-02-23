"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.insertUser = void 0;
const UserService_1 = require("../services/UserService");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    const user = yield (0, UserService_1.getDetailUser)(email + '');
    res.send({ user });
});
exports.getUser = getUser;
const insertUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const user = yield (0, UserService_1.registerUser)(body);
    res.send({ user });
});
exports.insertUser = insertUser;
//# sourceMappingURL=UserController.js.map