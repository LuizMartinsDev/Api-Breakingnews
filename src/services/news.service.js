import {News} from '../models/News.js'

export const createNewsInDb = (body) => News.create(body);

export const findAllNewsInDb = (offset, limit) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate('user');

export const countNews = () => News.countDocuments();