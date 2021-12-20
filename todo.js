const { Schema,model } = require("mongoose")

const todoSchema=new Schema({title:String ,isCompleted:Boolean
})
const Todo=model('Todo',todoSchema)
module.exports=Todo