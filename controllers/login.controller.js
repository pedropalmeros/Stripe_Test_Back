const{ response, request, json } = require('express');
const express = require('express'); 
const User = require('../models/user.model');
const {hashPassword}     = require('../helpers/auth');
const { comparePassword} = require('../helpers/auth');
const jwt = require('jsonwebtoken')

const userLogin = async(req = request, res = response ) =>{
    try{
        console.log(req.body);
        const  user = await User.findOne({email: req.body.email});

        //check email
        if (!user){
            return res.json({
                success: false,
                error: "Invalid User/Password - User"
            })
        }

        //check password
        const match = await comparePassword(req.body.password,user.password);
        if(!match){
            return res.json({
                success: false,
                error: "Invalid User/Password - Password"
            })
        }

        // LOGIN IS OK we need to send back a token
        const token = jwt.sign({_id: user._id},process.env.JWT_SECRET,{
            expiresIn: "7d",
        });

        const {password, ...shareableUser } = user._doc;
        res.json({
            sucess: true,
            token,
            user: shareableUser
        })
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    userLogin
}