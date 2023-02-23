import { Request, Response } from 'express';

import { UserUseCase } from '../../application/userUseCase';

export class UserController {

    constructor(private userUseCase: UserUseCase) {

        this.getController = this.getController.bind(this);
        this.insertController = this.insertController.bind(this);

    }

    public async getController(req: Request, res: Response) {

        const { id } = req.params;
        const user = await this.userUseCase.getDetailUser(id);
        res.send({ user });
        
    }

    public async insertController(req: Request, res: Response) {

        const { body } = req;
        const user = await this.userUseCase.registerUser(body);
        res.send({ user });

    }

}