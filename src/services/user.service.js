import {User} from '../models/User.js'

export const createUserInDb = (body) => User.create(body)
export const findAllUsersInDb = () => User.find();
export const findByIdUserInDb = (id) => User.findById(id);
export const updateUserInDb = (id, name, username, email, password, avatar, background) => User.findByIdAndUpdate({_id: id}, {name, username, email, password, avatar, background})
