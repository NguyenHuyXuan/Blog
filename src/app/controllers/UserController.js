const User = require('../models/User');



class UserController {


    signup(req, res, next ){
        res.render('../../resources/views/signup');
    }

    
    store(req, res, next ){

        const user = new User(req.body);
        user.save()
            .then(() => res.redirect('/'))
            .catch(err => {

            });

    }


}

module.exports = new UserController();