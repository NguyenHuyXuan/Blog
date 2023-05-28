const express = require('express');
const router = express.Router();

const myController = require('../app/controllers/MyController');

router.use('/store/blogs', myController.storeBlogs);



module.exports = router;                                                                                        
