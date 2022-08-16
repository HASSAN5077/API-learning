const router = require('express').Router()

router.get('/',(req,res)=>{
    res.json({
        staus:'api working ',
        message:'fhskjdfh hskjdfhiu ksf hi'
    })
})

module.exports = router