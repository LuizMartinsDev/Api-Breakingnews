import {createUserInDb} from '../services/user.service.js'

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