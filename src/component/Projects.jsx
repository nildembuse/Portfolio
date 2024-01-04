import React from "react";

import  "./App.css";

import projects from "../data/projects.json";


function Projects() {
  return (
    <section className="container" id="projects">
      <h2 className="title">Projects</h2>
      <div className="projects">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  )
}
export default Projects

