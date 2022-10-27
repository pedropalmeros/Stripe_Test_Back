const { Router } = require('express');
const {request, response } = require('express');

const router = Router();

router.get('/',(req = request,res = response)=>{
    console.log('REGISTER - GET ');
    res.json({
        msg: 'REGISTER - GET'
    })
});


module.exports = router;