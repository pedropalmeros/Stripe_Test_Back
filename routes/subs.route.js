const { Router } = require('express');
const {request, response } = require('express');
const {prices} = require('../controllers/subs.controller')


const router = Router();

router.get('/',prices);


module.exports = router;