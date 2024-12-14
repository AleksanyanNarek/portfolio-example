import React from 'react';

import github from '../../assets/logos/github.svg';

const ProjectCard = ({ project }) => {
  return (
    <div className='projects-card'>
      <img src={project.image} alt={project.title} />
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <a className='projects-card-button' href={project.gitLink} rel="noreferrer" target="_blank">
        <img src={github} alt="github" />
        GitHub
      </a>
    </div>
  )
}

export default ProjectCard