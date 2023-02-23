import { UserRepository } from '../domain/user.repository';
import { UserValue } from '../domain/user.value';

export class UserUseCase {

    constructor(private readonly userRepository: UserRepository) {

    }

    public async registerUser({ name, email, description }: { name: String, email: String, description?: String }) {

        const userValue = new UserValue({ name, email, description });
        const userCreated = await this.userRepository.registerUser(userValue);
        return userCreated;

    }

    public async getDetailUser(uuid: string) {

        const user = await this.userRepository.findUserById(uuid);
        return user;

    }

}