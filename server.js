require('dotenv').config();
const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose')
const readdirSync = require('fs'); 
const morgan = require('morgan'); 

const homeRoute = '/api/';
const registerRoute = '/api/register';
const loginRoute = '/api/login/';

const app = express();

// data base
mongoose
    .connect(process.env.MONGODB_CNN)
    .then(()=>{console.log('DB Connected')})
    .catch((err)=>console.log('DB Connection Error ',err));

// middlewares
app.use(express.json({limit:"5mb"}));
//app.use(cors({
//    origin: [process.env.CLIENT_URL,
//             process.env.LOCAL_HOST],
//    })
//);
app.use(cors());

// autload routes
app.use(homeRoute, require('./routes/home.route'));
app.use(registerRoute, require('./routes/register.route'));
app.use(loginRoute, require('./routes/login.route'));





// listen
app.listen(8080);