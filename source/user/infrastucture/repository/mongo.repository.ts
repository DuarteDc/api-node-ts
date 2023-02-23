import { UserRepository } from '../../domain/user.repository';
import UserModel from '../model/user.model';

export class MongoRepository implements UserRepository {

    async findUserById(uuid: String): Promise<any | null> {
        const user = await UserModel.findOne({ uuid });
        return user;
    }
    async registerUser(userIn: any): Promise<any | null> {
        const user = await UserModel.create(userIn);
        return user;
    }
    async listUser(): Promise<any[] | null> {
        return UserModel.find();
    }

}