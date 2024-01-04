import React from "react";

import "/src/css/about.css";
import { getImageUrl } from "../utils";


function About () {
  return (
    <section className="container" id="about">
      <h2 className="title">About</h2>
      <div className="content">
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className="aboutImage"/>
        <ul className="aboutItems">
          <li className="aboutItem">
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className="aboutItemText">
              <h3>Frontend Developer</h3>
              <p> I'm a frontend developer with experience in building responsive and optimized sites</p>
            </div>
          </li>
          
          <li className="aboutItem">
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className="aboutItemText">
              <h3>UI Designer</h3>
              <p>I have designed multiple landing pages and have created design systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default About