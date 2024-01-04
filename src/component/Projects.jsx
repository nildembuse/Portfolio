import React from "react";

import projects from "../data/projects.json";
import ProjectsCard  from "/src/component/ProjectsCard";

function Projects() {
  return (
    <section className="container" id="projects">
      <h2 className="title">Projects</h2>
      <div className="projects">
        {projects.map((project, id) => {
          return <ProjectsCard key={id} project={project} />;
        })}
      </div>
    </section>
  )
}
export default Projects

