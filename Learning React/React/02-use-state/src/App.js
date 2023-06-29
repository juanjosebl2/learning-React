import logo from './logo.svg';
import './App.css';
import { MyFirstState } from './components/MyFirstState';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hooke state</h1>
        <MyFirstState />
      </header>
    </div>
  );
}

export default App;
