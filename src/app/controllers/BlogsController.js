class BlogsController {

    index(req, res) {
     res.render('blogs')   
    }

    // [GET] /blog/:slug
    show(req, res){
        res.send('new')
    }

}

module.exports = new BlogsController;