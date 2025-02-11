import {createUserInDb, findAllUsersInDb, findByIdUserInDb, updateUserInDb} from '../services/user.service.js'
import mongoose from 'mongoose'


export const create = async (req, res) => {
  const {name, username, email, password, avatar, background} = req.body;

  if(!name || !username || !email || !password || !avatar || !background){
    res.status(400).send({message: "Submit all fields for registration"})
  }

  const createUser = await createUserInDb(req.body);

  if(!createUser){
    return res.status(400).send({erro: 'Error Creating user'})
  }

  res.status(201).send({
    message: "User created successfully", 
    user: {
      id: createUser._id,
      name,
      username,
      email,
      avatar,
      background
    }
  })
}

export const findAllUsers = async (req, res) => {
  const users = await findAllUsersInDb();
  if( users.length == 0){
    return res.status(400).send({message: "There are no registered users"})
  }

  res.status(200).send(users)
}

export const findByIdUser = async (req, res) => {
      const idUser = req.params.id;

      if(!mongoose.Types.ObjectId.isValid(idUser)){ 
        res.status(400).send({message: 'Invalid id'})
      }

      const user = await findByIdUserInDb(idUser)

      if(!user) {
        return res.status(400).send({message: "User not found"})
      }

      res.status(200).send(user)
}

export const updateUser = async (req, res) => {
  const {name, username, email, password, avatar, background} = req.body;

  if(!name && !username && !email && !password && !avatar && !background){
    res.status(400).send({message: "Submit at least one field for update"})
  }

  const id = req.params.id;

  if(!mongoose.Types.ObjectId.isValid(id)){ 
    res.status(400).send({message: 'Invalid id'})
  }

  const user = await findByIdUserInDb(id);

  if(!user){
    return res.status(400).send({message: "User not found"})
  }

  await updateUserInDb(id, name, username, email, password, avatar, background)

  res.status(201).send({message: "User succesfully update!!"})
}

