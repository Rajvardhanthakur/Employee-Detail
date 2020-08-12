const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')
const PORT = 3000

const Employee = mongoose.model("employee")
const mongoUri = "mongodb+srv://Raj:njxJ9Q33rgCHsGmk@cluster0.8vgti.mongodb.net/<dbname>?retryWrites=true&w=majority"


mongoose.connect(mongoUri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("Connection established")
})

mongoose.connection.on('error',(err)=>{
    console.log("Error : ",err)
})

app.get('/',(req,res)=>{
    res.send("Server started")
})

app.listen(PORT, ()=>{
    console.log("server started on "+PORT)
})