import logo from './logo.svg';
import api from './api';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const [state,setState] = useState('');
  api.get('/').then((response)=>{
    setState(response.data.hello);
  }).catch((error)=>{
    console.log(error);
  })
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
          Link to react
        </a>
        <Navbar/>
        <h2>{state}</h2>
      </header>
    </div>
  );
}

export default App;
