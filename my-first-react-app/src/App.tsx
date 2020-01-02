import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickerComponent from './components/clicker.component';

const App: React.FC = () => {
  
  // State
  // State is information owned by a component
  // State can be replaced, which will cause the component to rerender.

  // javascript destructuring
  // useState returns an array with a value and a function
  // destructuring assigns the value to name, and the function to setName


  const [name, setName] = useState(1); 
  const [birthdate, setBirthdate] = useState(0);

  // React Hooks
  // - useState - Define some state object and recieve a function to update it
  // - useReducer - Used for very complicated state, multilevel object
  // - useEffect - Register lifecycle event hooks

  // const [state, setState] = useState({
  //   name: 'Mitch',
  //   age: 0
  // });


  setTimeout(() => {
    setName(name + 1);
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {name}
        </p>
          {/* Here I will insert a child component */}
        <ClickerComponent></ClickerComponent>
      </header>
    </div>
  );
}

export default App;
