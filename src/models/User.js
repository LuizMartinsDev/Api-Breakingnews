import mongoose from 'mongoose';

const userSchema = {
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    }
}

export const User = mongoose.model('User', userSchema)

