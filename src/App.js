// import '../public/css/index.css';
import './App.css';
import Header from "./components/_header";
import Task from './components/_tasks';

function App() {
  return (
    <div className="center">

      <div className="container">
        
          <Header/>
          <Task/>

      </div>

    </div>
  );
}

export default App;
