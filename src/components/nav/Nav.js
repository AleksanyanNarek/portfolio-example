import React, { useState } from 'react';
import './Nav.css';

import { motion } from 'framer-motion';

import { slideFromRigth } from '../../animations';

const Nav = ({ homeRef, aboutRef, educationRef, projectsRef}) => {

  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (ref, e) => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    if(isOpen) setIsOpen(false);

  };

  return (
    <header className='header'>
      <motion.h5 onClick={() => scrollTo(homeRef)} className="logo" variants={slideFromRigth} animate={"show"} initial="hidden">Narek</motion.h5>
      <motion.div className={`bx bx-menu menu-icon ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(prev => !prev)} variants={slideFromRigth} animate={"show"} initial="hidden">
        <span></span>
        <span></span>
        <span></span>
      </motion.div>

      <motion.div className={`navbar ${isOpen ? "active" : ""} `} variants={slideFromRigth} animate={"show"} initial="hidden">
        <h5 onClick={(e) => scrollTo(homeRef, e)}>Home</h5>
        <h5 onClick={(e) => scrollTo(aboutRef, e)}>About</h5>
        <h5 onClick={(e) => scrollTo(educationRef, e)}>Education</h5>
        <h5 onClick={(e) => scrollTo(projectsRef, e)}>Projects</h5>
      </motion.div>
    </header>
  )
}

export default Nav