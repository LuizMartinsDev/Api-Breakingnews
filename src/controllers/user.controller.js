import {createUserInDb, findAllUsersInDb, findByIdUserInDb, updateUserInDb} from '../services/user.service.js'
import mongoose from 'mongoose'


export const create = async (req, res) => {

  try{
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
  } catch(err){
    res.status(500).send({message: err.message})
  }
  
}

export const findAllUsers = async (req, res) => {

  try {
    const users = await findAllUsersInDb();
    if( users.length == 0){
      return res.status(400).send({message: "There are no registered users"})
    }

    res.status(200).send(users)
  } catch(err){
    res.status(500).send({message: err.message})
  }
  
}

export const findByIdUser = async (req, res) => {

  try {
    const user = req.user

    res.status(200).send(user)
  } catch(err){
    res.status(500).send({message: err.message})
  }
      
}

export const updateUser = async (req, res) => {

  try{
    const {name, username, email, password, avatar, background} = req.body;

  if(!name && !username && !email && !password && !avatar && !background){
    res.status(400).send({message: "Submit at least one field for update"})
  }

  const id = req.id;

  await updateUserInDb(id, name, username, email, password, avatar, background)

  res.status(201).send({message: "User succesfully update!!"})
  }catch(err){
    res.status(500).send({message: err.message})
  }
  
}

