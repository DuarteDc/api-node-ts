import { Request, Response } from 'express';

import { registerUser, getDetailUser } from '../services/UserService';

const getUser = async (req: Request, res: Response) => {

    const { email } = req.query;
    const user = await getDetailUser(email + '');
    res.send({ user });

}

const insertUser = async (req: Request, res: Response) => {
    const { body } = req;

    const user = await registerUser(body);

    res.send({ user });
}

export {
    insertUser,
    getUser,
};