const apiRouter = require('./api-routes')

const express = require('express')
let app = express()
const bodyParse = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParse.urlencoded({
    extended: true
}));

app.use(bodyParse.json())

mongoose.connect('mongodb://localhost/restfirst',{useNewUrlParser:true})
var db = mongoose.connection
if(!db){
    console.log("Error connecting db")
}
else{
    console.log('db connected successfuly')
}
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/api',apiRouter)





app.listen(8080,()=>{
    console.log("Listening ........");
})