const exp=require('express')
const app=exp()
app.use(exp.json())
const mongoose=require('mongoose')
const mongoURI='mongodb://localhost:27017/5_3'
const db=mongoose.connection
mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('DB is working')
})
