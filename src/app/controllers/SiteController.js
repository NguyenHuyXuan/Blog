
class SiteController{

    //[GET]
    index(req ,res , next){
        res.render('home');
    }

    //[GET] /search
    search(req ,res){
        res.send('search');
    }

    //[GET] /login
    login(req ,res){
        res.render('login');
    }

    signup(req ,res){
        res.render('signup');
    }

    contact(req ,res){
        res.render('contact');
    }

}

module.exports = new SiteController;