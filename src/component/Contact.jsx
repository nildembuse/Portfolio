import React from "react";

import  "/src/css/contact.css";



function  Contact() {
  return (
    <footer id="contact" className="container">
      <div className=".text">
        <h2>İletişim</h2>
        <p>Bana ulaşmaktan çekinmeyin.</p>
      </div>
      <ul className="links">
        <li className="link">
          <img src="/src/assets/contact/emailIcon.png" alt="Gmail icon" />
          <a href="gmail:nildembuse@gmail.com">nildembuse@gmail.com</a>
        </li>
        <li className="link">
          <img src="/src/assets/contact/linkedinIcon.png" alt="LinkedIn icon"/>
          <a href="https://www.linkedin.com/in/nildem-buse-ertürk-79b7231a4/">linkedin.com/nildembuseertürk</a>
        </li>
        <li className="link">
          <img src="/src/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/nildembuse">github.com/nildembuse</a>
        </li>
      </ul>
    </footer>
  )
}
export default Contact