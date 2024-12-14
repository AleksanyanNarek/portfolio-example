import React from 'react';
import './Projects.css';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { pageAnimation, slideFromRigth } from '../../animations';

import ProjectCard from './ProjectCard';
import { projectsData } from './projectdata';

const Projects = () => {

  const [element, view] = useInView({ threshold: 0.1 });

  return (
    <motion.div className='projects-information' variants={pageAnimation} ref={element} animate={view ? "show" : "exit"} initial="hidden">
      <motion.h2 variants={slideFromRigth}>Some of my <span>works</span></motion.h2>
      <motion.div variants={slideFromRigth} className='projects'>
        {projectsData.map((project, index) => {
          return <ProjectCard project={project} key={index} />
        })}
      </motion.div>
    </motion.div>
  )
}

export default Projects
