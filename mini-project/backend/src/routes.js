const express = require('express');
const { getData } = require('./controllers/apiController');
const router = express.Router();

router.get('/data', getData);

module.exports = router;
