const express = require('express');
const router = express.Router();
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

const detailsController = require('../app/controllers/DetailsController');


router.use('/create', detailsController.create);
router.post('/store', upload.array('image', 12));
router.use('/:slug/chapter', detailsController.show);
router.use('/:slug', detailsController.show);
router.use('/', detailsController.index);

module.exports = router;