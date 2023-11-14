import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import ChangeNameColor from './changeNameColor';

function App() {
  return (
    <div>
        <nav>
        <ul>
            <li><a href="Home.html">Home</a></li>
            <li><a href="About.html">About</a></li>
            <li><a href="Projects.html">Projects</a></li>
            <li><a href="Contact.html">Contact</a></li>
        </ul>
      </nav>    
      <hr />

      <h3>Hi, I'm</h3>
      <ChangeNameColor />
      <img src="portrait.png" className="Portrait" />

      <div className="Socials">
          <ul>
              <li><a href="https://www.instagram.com/nathantamari_/" target="_blank"><img src="insta.png" className="SocialPngs" /></a></li>
              <li><a href="https://www.linkedin.com/in/nathantamari/" target="_blank"><img src="linkedin.png" className="SocialPngs" /></a></li>
              <li><a href="https://github.com/nathantamari" target="_blank"><img src="GitHub.png" className="SocialPngs" /></a></li>
              <li><a href="https://www.youtube.com/@nathantamari" target="_blank"><img src="youtube.png" className="SocialPngs" /></a></li>
          </ul>
      </div>
  </div>
  );
}

export default App;
