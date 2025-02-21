import {createNewsInDb, findAllNewsInDb, countNews} from '../services/news.service.js';

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

        let {limit, offset} = req.query

        limit = Number(limit);
        offset = Number(offset);

        if(!limit){
            limit = 5
        }

        if(!offset){
            offset = 0;
        }

        const allNews = await findAllNewsInDb(offset, limit);

        const total = await countNews();

        const currentUrl = req.baseUrl;
        
        const next = offset + limit;

        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

        const previous = offset - limit < 0 ? null : offset - limit;

        const previousUrl = previous !== null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

        if( allNews.length == 0){
            return res.status(400).send({message: "There are no registered news"})
        }

        res.status(200).send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,
            results : allNews.map(newsItem => ({
                id: newsItem._id,
                title: newsItem.title,
                text: newsItem.text,
                banner: newsItem.banner,
                likes: newsItem.likes,
                comments: newsItem.comments,
                name: newsItem.user.name,
                userName: newsItem.user.username,
                avatar: newsItem.user.avatar
            }))

        })

    }catch(err){
        res.status(500).send({message: err.message})
    }

}