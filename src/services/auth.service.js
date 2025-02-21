import {User} from '../models/User.js';
import jwt from 'jsonwebtoken';

const secretJWT = process.env.SECRET_JWT;
export const authService = (email) => User.findOne({email: email}).select("+password");

export const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400} )