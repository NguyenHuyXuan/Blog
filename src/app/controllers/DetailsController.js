
class DetailController{
    index(req, res){
        res.render('details');
    }
    show(req, res){
        res.send('')
    }
}

module.exports = new DetailController;