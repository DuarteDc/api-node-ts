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
exports.MockRepository = void 0;
const MOCK_USER = {
    name: 'Duarte',
    description: 'Hola xD',
    uuid: '1231231'
};
class MockRepository {
    findUserById(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = MOCK_USER;
            return user;
        });
    }
    registerUser(userIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = MOCK_USER;
            return user;
        });
    }
    listUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return [MOCK_USER, MOCK_USER, MOCK_USER];
        });
    }
}
exports.MockRepository = MockRepository;
//# sourceMappingURL=mock.repository.js.map