import logo from './logo.svg';
import api from './api';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Helplines from './Components/Helplines/Helplines';
import About from './Components/About/About'
import ImageSlider from './Components/Carousel/ImageSlider';
import ImageSliderAuto from './Components/Carousel/ImageSliderAuto';
import {ImageData, TextData} from './Components/Carousel/json/jsonData';
import MapComponent from './Components/Map/MapComponent';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <section id="hero">
      {/* <ImageSlider ImageData={ImageData} /><br /> */}
      <ImageSliderAuto ImageData={ImageData} TextData={TextData} SlideInterValTime={2000} />

      </section>
      <section id="about">
        <About />
      </section>
      <section id="helpline">
        <Helplines/>
      </section>
      <section id='flood'>
        <MapComponent />
      </section>
    </div>
  );
}

export default App;
