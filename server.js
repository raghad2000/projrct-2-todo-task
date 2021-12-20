const exp=require('express')
const app=exp()
app.use(exp.json())
const db=require('./db')
const Todo=require('./todo')
app.get('/getProject',(req,res)=>
{
    res.json('work')

})
app.get('/get2',(req,res)=>
{
    Todo.find({},(err,data)=>{
        if(err)
        {
            console.log("Error:",err)
        }
        else{
            res.json(data)
           
        }
    })

})
app.get('/get3',(req,res)=>
{
    Todo.find({isCompleted:"true"},(err,data)=>{
        if(err)
        {
            console.log("Error:",err)
        }
        else{
            res.json(data)
           
        }
       
    })

})
app.get('/get4',(req,res)=>
{
    Todo.find({isCompleted:"false"},(err,data)=>{
        if(err)
        {
            console.log("Error:",err)
        }
        else{
            res.json(data)
           
        }
       
    })

})
app.post("/tasks", (req, res) => {
    // console.log('25:',req.body);
  
    Todo.create(req.body, (err, newTask) => {
      if (err) {
        console.log("ERROR: ", err);
      } else {
        res.status(201).json(newTask);
        res.json("Creates Todo Successfuly")
      }
    });
  });
  app.delete("/tasks/:id", (req, res) => {
    // console.log("37:", req.params.id);
  
    Todo.deleteOne({ _id: req.params.id }, (err, deleteObj) => {
      if (err) {
        console.log("ERROR: ", err);
      } else {
        deleteObj.deletedCount === 1
          ? res.json("Delete one todo successfully")
          : res.status(404).json("This todo is not found");
      }
    });
  });
  app.delete("/tasks", (req, res) => {
    // console.log("37:", req.params.id);
  
    Todo.deleteMany({ isCompleted: true }, (err, deleteObj) => {
      if (err) {
        console.log("ERROR: ", err);
      } else {
        console.log(deleteObj);
        deleteObj.deletedCount === 0
          ? res.status(404).json("There is no completed todo found")
          : res.json("Delete all completed todos successfully");
      }
    });
  });
  app.put("/tasks/:id", (req, res) => {
    // console.log("37:", req.params.id);
    Todo.updateOne(
      { _id: req.params.id },
      { title: req.body.newTitle },
      (err, updateObj) => {
        if (err) {
          // console.log("ERROR: ", err);
          res.status(400).json(err);
        } else {
          console.log(updateObj);
          updateObj.modifiedCount === 1
            ? res.json("Update one todo successfully")
            : res.status(404).json("This todo is not found");
        }
      }
    );
  });
app.listen(3000,()=>{
    console.log('Work')
})