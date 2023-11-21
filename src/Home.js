import React from "react";
import ChangeNameColor from './changeNameColor';

function Home() {
    return (
    <div>
        <h3>Hi, I'm</h3>
            <ChangeNameColor />
            <img src="portrait.png" className="Portrait" alt="Portait"/>

            <div className="Socials">
                <ul>
                    <li><a href="https://www.instagram.com/nathantamari_/" target="_blank" rel="noreferrer"><img src="insta.png" className="SocialPngs" alt="InstaGram"/></a></li>
                    <li><a href="https://www.linkedin.com/in/nathantamari/" target="_blank" rel="noreferrer"><img src="linkedin.png" className="SocialPngs" alt="LinkedIn"/></a></li>
                    <li><a href="https://github.com/nathantamari" target="_blank" rel="noreferrer"><img src="GitHub.png" className="SocialPngs" alt="GitHub"/></a></li>
                    <li><a href="https://www.youtube.com/@nathantamari" target="_blank" rel="noreferrer"><img src="youtube.png" className="SocialPngs" alt="YouTube"/></a></li>
                </ul>
            </div>
    </div>
    );
}

export default Home;