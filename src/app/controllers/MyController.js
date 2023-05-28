const Blog = require('../models/Blog');
const { multipleMongooseToObject } = require('../../util/mongoose');


class MyController{
    storeBlogs(req, res , next){
        Blog.find({})
            .then(blogs => res.render('me/store-blogs', {
                blogs:multipleMongooseToObject(blogs)
            }))
            .catch(next);

    }
}

module.exports = new MyController();