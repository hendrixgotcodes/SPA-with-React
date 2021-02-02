// import '../public/css/index.css';
import './App.css';
import Header from "./components/_header";
import Task from './components/_tasks';

function App() {

  const tasks = [

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

  ]


  return (
    <div className="center">

      <div className="container">
        
          <Header/>
          <Task tasks={tasks}/>

      </div>

    </div>
  );
}

export default App;
