import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

document.body.style['transform-origin'] = `0 0`;

function App() {
  const [scaleState, setScaleState] = useState(1);

  const addScale = () => {
    let newScale = scaleState + 0.1
    document.body.style.transform = `scale(${newScale})`;
    document.body.style.width = `${100*(1/newScale)}%`
    setScaleState(newScale);
  }

  const minusScale = () => {
    let newScale = scaleState - 0.1
    document.body.style.transform = `scale(${newScale})`;
    document.body.style.width = `${100*(1/newScale)}%`
    setScaleState(newScale);
  }

  console.log(scaleState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={addScale}>Larger</button>
        <button onClick={minusScale}>Smaller</button>
      </header>
    </div>
  );
}

export default App;
