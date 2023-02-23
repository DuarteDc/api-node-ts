import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import UserModel from '../model/user.model';


const MOCK_USER = {
    name        :'Duarte',
    description : 'Hola xD',
    uuid        : '1231231'
}

export class MockRepository implements UserRepository {

    async findUserById(uuid: String): Promise<any | null> {
        const user = MOCK_USER;
        return user;
    }
    async registerUser(userIn: any): Promise<any | null> {
        const user = MOCK_USER;
        return user;
    }
    async listUser(): Promise<any[] | null> {
        return [ MOCK_USER , MOCK_USER , MOCK_USER ];
    }

}