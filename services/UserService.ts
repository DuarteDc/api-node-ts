import UserModel from '../models/UserModel';

import { UserInterface } from '../types/User';

const registerUser = async (user: UserInterface) => {
    const response = await UserModel.create(user);
    return response;
}

const getDetailUser = async (email: String) => {
    const response = await UserModel.findOne({ email });
    return response;
}

export {
    registerUser,
    getDetailUser,
};