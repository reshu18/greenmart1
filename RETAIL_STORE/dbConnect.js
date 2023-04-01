const mongoose = require('mongoose')

const URL = "mongodb+srv://Reshmongo2023:Mongo2023&&@cluster0.owbipde.mongodb.net/sheypos"


mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})