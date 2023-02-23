import { v4 as uuid }from 'uuid';

import { UserEntity } from './user.entity';

export class UserValue implements UserEntity {
    
    uuid        :   String;
    name        :   String;
    email       :   String;
    description :   String;

    constructor({ name, email, description }: { name: String, email: String, description?: String }) {
        this.uuid        = uuid();
        this.name        = name;
        this.email       = email;
        this.description = description ?? 'default';
    }

}