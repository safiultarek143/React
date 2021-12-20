import logo from './logo.svg';
import './App.css';
import Functions from './components/Function';
import Welcome from './Welcome';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Functions />
      <Welcome />
      <Navbar />
    </div>
  );
}

export default App;
