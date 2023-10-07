import logo from './logo.svg';
import api from './api';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Helplines from './Components/Helplines/Helplines';

function App() {

  return (
    <div className="App">
      <Navbar/>

        <Helplines/>
    </div>
  );
}

export default App;
