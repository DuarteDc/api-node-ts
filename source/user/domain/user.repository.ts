import { UserEntity } from "./user.entity";

export interface UserRepository {

    findUserById(uuid: String): Promise<UserEntity | null>;
    registerUser(user: any): Promise<UserEntity | null>
    listUser(): Promise<UserEntity[] | null>

}