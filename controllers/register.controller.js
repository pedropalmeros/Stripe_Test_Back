const{ response, request, json } = require('express');
const express = require('express'); 
const User = require('../models/user.model');
const {hashPassword}     = require('../helpers/auth');
const { comparePassword} = require('../helpers/auth')

const createUser = async(req = request, res = response ) =>{
    try{
        // validation
        const {name, email, password} = req.body;
        if(!name){
            return res.json({
                success: false,
                error: "Name is required"
            });
        }
        if(!password || password.length<6){
            return res.json({
                success: false,
                error: "Password is required an should be 6 characters long"
            })
        }
        if(!email){
            return res.json({
                success: false,
                error: "Email is required"
            })
        }

        const exist = await User.findOne({email})


        if(exist){
            return res.json({
                success: false,
                error: "Email is taken"
            })
        }
        const hashedPassword = await hashPassword(password);
        try{
            user = await new User({
                name,
                email,
                password: hashedPassword
            }).save();

            const {password, ...shareableUser} = user._doc;
            res.json({
                success: true,
                user: shareableUser
            })     
        }catch(err){
            console.log(err);
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createUser,
}

