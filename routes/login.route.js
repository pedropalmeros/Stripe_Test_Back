const { Router } = require('express');
const {request, response } = require('express');

const router = Router();

router.get('/',(req = request,res = response)=>{
    console.log('LOGIN - GET ');
    res.json({
        msg: 'LOGIN - GET'
    })
});


module.exports = router;