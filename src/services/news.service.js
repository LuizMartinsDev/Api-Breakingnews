import {News} from '../models/News.js'

export const createNewsInDb = (body) => News.create(body);

export const findAllNewsInDb = () => News.find();