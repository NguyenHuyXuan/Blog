const Blog = require('../models/Blog');
const { mongooseToObject } = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');


class BlogController {  

    index(req, res , next){
        Blog.find({ })
            .then(blogs => {
                res.render('blogs' , { 
                    blogs: multipleMongooseToObject(blogs)});
            })
            .catch(next);
    
        }
    // [GET] /blog/:slug
    show(req, res , next){
        Blog.findOne({ slug: req.params.slug })
            .then(blog => {
                res.render('blogs/show' , { 
                    blog: mongooseToObject(blog)});
            })
            .catch(next);
    
    }

    create(req, res, next ){
        res.render('blogs/create');
    }

    store(req, res, next ){

        const blog = new Blog(req.body);
        blog.save()
            .then(() => res.redirect('/'))
            .catch(err =>{

            });


    }

    edit(req, res, next ){
        Blog.findById(req.params.id)
            .then(blog => res.render('blogs/edit', {
                blog: mongooseToObject(blog)
            }))
            .catch(next);
    }


}

module.exports = new BlogController();