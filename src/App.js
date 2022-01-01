import logo from './logo.svg';
import './App.css';
import Functions from './components/Function';
import Welcome from './Welcome';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';
import Counter from './components/Counter';
import CarOne from './components/CarOne';
import ClickOne from './components/ClickOne';
import ClickTwo from './components/ClickTwo';
function App() {
  return (
    <div className="App">
      {/* <Functions name="jhon" age="40" >This is children props</Functions>
      <Functions name="rocky" age="20" />
      <Functions name= "jack" age="30" /> */}
      {/* <Subscribe /> */}
      {/* <Welcome /> */}
      {/* <Counter /> */}
      <CarOne brand ="ford" color="black" />
      < ClickOne />
      <ClickTwo />
    </div>
  );
}

export default App;
