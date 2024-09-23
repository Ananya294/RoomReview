const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


router.post("/createuser", 
    [body('email',"invalid email").isEmail(),
    body('password',"incorrect password").isLength({min:5})],    
    async (req,res)=>{

        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({ errors: errors.array() });
        }

    try {
        await  User.create({
            email: req.body.email,
            password: req.body.password
        }).then(res.json({success:true}))

    
    } catch(error){
        console.log(error)
        res.json({success:false});
    }
});

module.exports = router;