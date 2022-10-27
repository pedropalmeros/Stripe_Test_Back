const { Router } = require('express');
const {request, response } = require('express');

const router = Router();

router.get('/',(req = request,res = response)=>{
    console.log('HOME - GET ');
    res.json({
        msg: 'HOME - GET'
    })
});


module.exports = router;