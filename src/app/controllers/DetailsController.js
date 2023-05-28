const Detail = require('../models/detail');
const { mongooseToObject } = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');
const imgModel = require('../models/Img.detail');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
  });
  
const upload = multer({ storage: storage });


class DetailController{
    index(req, res , next){
        Detail.find({ })
            .then(details => {
                res.render('details' , { 
                    details: multipleMongooseToObject(details)});
            })
            .catch(next);
    
        }

        show(req, res , next){
            Detail.findOne({ slug: req.params.slug })
                .then(detail => {
                    res.render('details/show' , { 
                        detail: mongooseToObject(detail)});
                })
                .catch(next);
        
        }

        show(req, res , next){
            imgModel.find({}, (err, items) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('An error occurred', err);
                }
                else {
                    res.render('details/show', { items: items });
                }
            });
        }

        create(req, res, next ){
            res.render('details/create');
        }

        store(req, res, next ){

            const detail = new Detail(req.body);
            detail.save()
                .then(() => res.redirect('/'))
                .catch(err =>{
    
                });

    }

        post(req, res ,next){
            var obj = {
                name: req.body.name,
                desc: req.body.desc,
                img: {
                    data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                    contentType: 'image/png'
                }
            }
            imgModel.create(obj, (err, item) => {
                if (err) {
                    console.log(err);
                }
                else {
                    // item.save();
                    res.redirect('/');
                }
            });
        }

}

module.exports = new DetailController;
