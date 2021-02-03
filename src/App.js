// import '../public/css/index.css';
import './App.css';
import Header from "./components/_header";
import Task from './components/_tasks';
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


  return (

    <div className="center">

      <div className="container">
        
          <Header/>
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
