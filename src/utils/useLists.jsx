import React from "react";

function useLists(projects) {
  return (
    <div className="list">
      {projects.map((project) => (
        <a href={project.link} key={project.image}>
          <img src={project.image} alt={project.title} />
        </a>
      ))}
    </div>
  );
}

export default useLists;
