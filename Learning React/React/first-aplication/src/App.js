import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import { SecondComponent } from './SecondComponent';
import { ThirdComponent } from './ThirdComponent';
import { EventsComponent } from './EventsComponent';



function App() {
  const userInApp = {
    id: 1,
    firstName: 'John'
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Component */}
        <div className="components">
          <hr/>
          <EventsComponent/>
          <hr />
          <ThirdComponent 
            age={21}
            user={userInApp}
          />
          <hr />
          <MyComponent />
          <hr />
          <SecondComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
