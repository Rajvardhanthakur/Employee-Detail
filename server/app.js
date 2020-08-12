const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 3000


const mongoUri = "mongodb+srv://Raj:njxJ9Q33rgCHsGmk@cluster0.8vgti.mongodb.net/<dbname>?retryWrites=true&w=majority"

app.get('/',(req,res)=>{
    res.send("Server started")
})

app.listen(PORT, ()=>{
    console.log("server started on "+PORT)
})