import {User} from '../models/User.js'

export const createUserInDb = (body) => User.create(body)