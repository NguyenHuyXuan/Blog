const express = require('express');
const router = express.Router();

const detailsController = require('../app/controllers/DetailsController');

router.use('/:slug', detailsController.show);
router.use('/', detailsController.index);

module.exports = router;