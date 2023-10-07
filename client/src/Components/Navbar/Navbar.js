import React from 'react'
import './Navbar.css'

function Navbar() {

  function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }

  return (
    <nav id="header">
    <div className="nav-logo">
        <p className="nav-name">Relief Link</p>
        <span>.</span>
    </div>
    <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
            <li className="nav_list">
                <a href="#home" className="nav-link active-link">Home</a>
                <div className="circle"></div>
            </li>
            <li className="nav_list">
                <a href="#about" className="nav-link">About</a>
                <div className="circle"></div>
            </li>
            <li className="nav_list">
                <a href="#projects" className="nav-link">Flood</a>
                <div className="circle"></div>
            </li>
            <li className="nav_list">
                <a href="#contact" className="nav-link">Virus</a>
                <div className="circle"></div>
            </li>
            <li className="nav_list">
                <a href="#contact" className="nav-link">Report</a>
                <div className="circle"></div>
            </li>
            <li className="nav_list">
                <a href="#contact" className="nav-link">Sign In</a>
                <div className="circle"></div>
            </li>
        </ul>
    </div>
    
    <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={myMenuFunction}></i>
    </div>
</nav>
  )
}

export default Navbar
