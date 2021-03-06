// import '../public/css/index.css';
import './App.css';
import Header from "./components/_header";
import Task from './components/_tasks';
import AddTask from './components/_form';
import {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([

    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 3rd at 2:30pm',
        reminder: false
    }

  ])

  const [formShown, toggleForm] = useState(false); 

  function deleteTask(id){

    setTasks(tasks.filter((task)=>task.id !== id))
  }

  function toggleReminder(id){

    // setTasks(tasks.map((task)=> task.id === id
    //   ? {...task, reminder : !task.reminder} : task
    // ))

    //in case you do not understand the code up there, the one below explains it
    setTasks(tasks.map((task)=>{

      if(task.id === id){

          task.reminder = !task.reminder;
          return task;

      }
      else{
         return task;
      }

    }))

  }

  const addNewTask = (task)=>{

      const id = Math.floor(Math.random()*1000 + 1);
      const newTask = {id, ...task};
      setTasks([...tasks, newTask]);

  }


  return (

    <div className="center">

      <div className="container">
        
          <Header onShowForm = {()=> toggleForm(!formShown)}/>
          {formShown && <AddTask onAdd={addNewTask} />}
          {
            tasks.length > 0 ? (
                <Task tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/>
            ):(
              'No tasks to show'
            )
          }

      </div>

    </div>

  );
}

export default App;
