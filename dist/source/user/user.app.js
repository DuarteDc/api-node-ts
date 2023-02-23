"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("express"));
const mongo_1 = __importDefault(require("./infrastucture/db/mongo"));
const user_route_1 = __importDefault(require("./infrastucture/route/user.route"));
const app = (0, express_1.default)();
app.use((0, express_2.default)());
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
app.use(user_route_1.default);
(0, mongo_1.default)().then();
app.listen(port, () => console.log('API clean code and clean arquitecture v1'));
//# sourceMappingURL=user.app.js.map