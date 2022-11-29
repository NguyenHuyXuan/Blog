class SiteController{

    //[GET]
    index(req ,res){
        res.render('home');
    }

    //[GET] /search
    search(req ,res){
        res.render('search');
    }

    //[GET] /login
    login(req ,res){
        res.render('login');
    }

    signin(req ,res){
        res.render('signin');
    }

    contact(req ,res){
        res.render('contact');
    }

}

module.exports = new SiteController;