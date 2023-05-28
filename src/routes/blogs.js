const express = require('express');
const router = express.Router();

const blogController = require('../app/controllers/BlogController');

router.use('/create', blogController.create);
router.use('/:id/edit', blogController.edit);
router.post('/store', blogController.store);
router.use('/:slug', blogController.show);
router.use('/', blogController.index);


module.exports = router;                                                                                        
