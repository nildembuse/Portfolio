import React from "react";

import "/src/css/projectCard.css";
import { getImageUrl } from "../utils";

function ProjectCard ({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  return (
    <div className="container">
      <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className="image"/>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <ul className="skills">
        {skills.map((skill, id) => {
          return (
            <li key={id} className="skill">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="links">
        <a href={demo} className="link">
          Demo
        </a>
        <a href={source} className="link">
          Source
        </a>
      </div>
    </div>
  )
}
export default ProjectCard