import './App.css';
import React,{useState,useEffect} from "react"
import axios from 'axios'
import Todo from "./components/Todo";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
     // should bring data using axios
    // from backend (GET /tasks)
    axios
      .get(`http://localhost:3000/tasks`)
      .then((response) => {
        // console.log('RESPONSE: ', response);
        console.log("DATA: ", response.data);
        setTasks(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  const mapOverTasks = tasks.map((taskObj, i) => (
    <Todo key={i} task={taskObj} />
  ));
  return (
    <div className="App">
     <button onClick={getData}>Get Task</button>
     {mapOverTasks}
    </div>
  );
}

export default App;
