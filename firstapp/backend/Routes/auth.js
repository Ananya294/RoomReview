const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jswebtoken');
const User = require('../models/User');

const router = express.Router();

//Login Route
router.post("/login",
    [
        body('email').isEmail().withMessage('Enter a valid email'),
        body('password').exists().withMessage('Password is required')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({errros:errors.array()});
        }

        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if(!user){
                return res.status(400).json({ message: "Invalid Credentials"});
            }

            //Verify password
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) {
                return res.status(400).json({ message: "Invalid Credentials"});
            }

            //check for college email (@college.edu)
            if(email.endsWith('@college.edu')){
                user.isStudentVerified = true;
                await user.save();
            }

            //generate JWT token
            const token = jwt.sign({ userId:user._id }, 'yourScretKey', {expiresIn: '1h'});

            res.json({ token, isStudentVerified: user.isStudentVerified });

        } catch(err) {
            console.error(err);
            res.status(500).json({ message: "Server error" });
        }
    }
);

module.exports = router;
