import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    uuid: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const UserModel = model('User', UserSchema);

export default UserModel;