const{ response, request, json } = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express'); 

const prices = async(req,res) =>{
    const prices = await stripe.prices.list();
    console.log('prices',prices);
    res.json(prices.data.reverse());
}


module.exports = {
    prices,
}