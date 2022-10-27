const { Router } = require('express');
const {request, response } = require('express');

const {createUser} = require('../controllers/register.controller')

const router = Router();

router.get('/',(req = request,res = response)=>{
    console.log('REGISTER - GET ');
    res.json({
        msg: 'REGISTER - GET'
    })
});

router.post('/',createUser);


module.exports = router;