import {authService, generateToken} from '../services/auth.service.js';
import bcryptjs from 'bcryptjs'

export const login = async (req, res) => {
    const {email, password} = req.body;

    const user = await authService(email);

    if(!user){
        return res.status(400).send({message: 'access denied'})
    }
    const passwordIsValid = await bcryptjs.compare(password, user.password)

    if(!passwordIsValid){
		return res.status(400).send({message: "access denied"})
	}	

    const token = generateToken(user.id)

    res.send({token})
}