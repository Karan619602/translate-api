const express=require('express')
const app=express();
 const connectdatabase  = require('./config/database.js')
 const {config} =require('dotenv')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* env variables */
config({path:'config/config.env'})
/* connecting database */
connectdatabase();

const translateroute =require('./routes/translateroutes.js')

/* middlewares */
app.use('/',translateroute);


/* express server */
app.listen(4000,(err)=>{
    console.log('port 4000');
})
