import {createNewsInDb, findAllNewsInDb} from '../services/news.service.js';

export const create = async (req, res) => {

    try {
        const {title, text, banner} = req.body

        const userId = req.userId;
       
        console.log(userId)
        

        if(!title || !text || !banner){
            res.status(400).send({message: "Submit all fields for registration"})
        }
    
        const news = await createNewsInDb({
            title, 
            text, 
            banner,
            user: userId,
        });
    
        if(!news){
            return res.status(400).send({erro: 'Error Creating news'})
        }
    
        res.status(201).send({
            message: "User created successfully",
            news: {
                id: news._id,
                title, 
                text, 
                banner,
                userId
            }
    
        })
    } catch(err) {
        res.status(500).send({message: err.message})
    }
   
}

export const findAllNews = async (req, res) => {

    try{

        const allNews = await findAllNewsInDb();


        if( allNews.length == 0){
            return res.status(400).send({message: "There are no registered news"})
        }

        res.status(200).send({allNews, userId})

    }catch(err){
        res.status(500).send({message: err.message})
    }

}