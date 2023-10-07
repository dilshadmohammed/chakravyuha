import logo from './logo.svg';
import api from './api';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Helplines from './Components/Helplines/Helplines';
import About from './Components/About/About'
import ImageSlider from './Components/Carousel/ImageSlider';
import ImageSliderAuto from './Components/Carousel/ImageSliderAuto';
import { ImageData } from './Components/Carousel/json/jsonData';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <section id="hero">
      {/* <ImageSlider ImageData={ImageData} /><br /> */}
      <ImageSliderAuto ImageData={ImageData} SlideInterValTime={2000} />

      </section>
      <section id="about">
        <About />
      </section>
      <section id="helpline">
        <Helplines/>
      </section>
    </div>
  );
}

export default App;
