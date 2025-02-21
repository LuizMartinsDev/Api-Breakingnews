import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {findByIdUserInDb} from '../services/user.service.js'
dotenv.config();

export const authMiddleware = (req, res, next) => {

    try{

        const {authorization} = req.headers;

        if(!authorization){
            res.status(401);
        }

        const parts = authorization.split(" ");

        const [schema, token ]= parts;
            
        if(schema !== "Bearer"){
            return res.status(401);
        }

        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if(error){
                return res.status(401).send({message: error})
            }
           const user = await findByIdUserInDb(decoded.id);

           if(!user){
                res.status(400).send({message: '"User not found"'})
            }

            req.userId = user.id;
            return next()
        })
        
    } catch(error){
        return res.status(500).send({message: err.message})
    }
    
}