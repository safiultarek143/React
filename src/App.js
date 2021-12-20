import logo from './logo.svg';
import './App.css';
import Functions from './components/Function';
import Welcome from './Welcome';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Functions name="jhon" age="40" >This is children props</Functions>
      <Functions name="rocky" age="20" />
      <Functions name= "jack" age="30" />
    </div>
  );
}

export default App;
