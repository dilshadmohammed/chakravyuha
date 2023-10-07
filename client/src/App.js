import logo from './logo.svg';
import api from './api';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Helplines from './Components/Helplines/Helplines';


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
        <Navbar/>
        <Helplines/>
        <h2>{state}</h2>
      </header>
    </div>
  );
}

export default App;
