const express = require('express');
const router = express.Router();

const startController = require('../controllers/startController');

router.get('/', startController.start)

module.exports = router;
