import logo from './logo.svg';
import './App.css';
import { ComponentEffect } from './components/ComponentEffect';
import { AjaxComponent } from './components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <ComponentEffect/>
        <hr/>
        <AjaxComponent/>
        
      </header>
    </div>
  );
}

export default App;
