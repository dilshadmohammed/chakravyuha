import React from 'react'
import './About.css'

function About() {
  return (
    <div className="wrapper">
        <div><h2 className='about-title'>Our Mission</h2></div>
        <div className='about-description'>
            <p>
                ReliefLink is a website dedicated to providing accurate and reliable information in the event of natural disasters in your area.
                Our mission is to be a one-stop site for all the information and services necessary required to survive a disaster, natural or man-made.
            </p>
        </div>
    </div>
  );
}

export default About;
