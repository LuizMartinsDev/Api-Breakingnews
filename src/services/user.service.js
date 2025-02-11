import {User} from '../models/User.js'

export const createUserInDb = (body) => User.create(body)
export const findAllUsersInDb = () => User.find();
export const findByIdUserInDb = (id) => User.findById(id)
