const Blog = require('../models/Blog');

class BlogController {

    index(req, res , next) {

        Blog.find({})
        .then(blogs => {
            blogs = blogs.map(blog => blog.toObject())
            res.render('blogs' , { blogs });
        })
        .catch(next);
        
    }

    // [GET] /blog/:slug
    show(req, res){
        res.send('new')
    }

}

module.exports = new BlogController;