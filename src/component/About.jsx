import React from "react";

import "/src/css/about.css";



function About () {
  return (
    <section className="container" id="about">
      <h2 className="title">About</h2>
      <div className="content">
        <img src="/src/assets/about/aboutImage.png" alt="Me sitting with a laptop" className="aboutImage"/>
        <ul className="aboutItems">
          <li className="aboutItem">
            <img src="/src/assets/about/cursorIcon.png"alt="Cursor icon" />
            <div className="aboutItemText">
              <h3>Frontend Developer</h3>
              <p> Duyarlı ve optimize edilmiş siteler oluşturma konusunda deneyime sahip bir Junior Frontend Developer.</p>
            </div>
          </li>
          
          <li className="aboutItem">
            <img src="/src/assets/about/cursorIcon.png" alt="UI icon" />
            <div className="aboutItemText">
              <h3>UI Designer</h3>
              <p> Eğitimim boyunca birden fazla web tasarımı yaptım.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default About