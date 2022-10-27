const { Router } = require('express');
const {request, response } = require('express');
const {userLogin} = require('../controllers/login.controller')


const router = Router();

router.get('/',(req = request,res = response)=>{
    console.log('LOGIN - GET ');
    res.json({
        msg: 'LOGIN - GET'
    })
});

router.post('/',userLogin);


module.exports = router;