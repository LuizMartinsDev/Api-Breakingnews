import {User} from '../models/User.js';

export const authService = (email) => User.findOne({email: email}).select("+password")