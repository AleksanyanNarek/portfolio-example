import React from 'react'
import './About.css';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { pageAnimation, slideFromRigth } from '../../animations';

import aboutImg from '../../assets/aboutImg.jpg';

const About = () => {

  const [element, view] = useInView({ threshold: 0.3 });

  return (
    <motion.div className='about' variants={pageAnimation} ref={element} animate={view ? "show" : "exit"} initial="hidden">
      <motion.h2 variants={slideFromRigth}>About <span>Me</span></motion.h2>
      <motion.div variants={slideFromRigth} className='about-img'>
        <img src={aboutImg} alt="portfoli o" width="200px" height="200px"/>
        <span className="circle-spin"></span>
      </motion.div>
      <div className="about-content">
        <motion.h3 variants={slideFromRigth}>Frontend Developer!</motion.h3>
        <motion.p variants={slideFromRigth}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita vero dolore, numquam dolor unde voluptate explicabo ea odio similique nam autem magnam quod aspernatur voluptatibus maiores amet sint aut natus consectetur in tempora aliquid. Architecto nihil molestiae sit molestias temporibus ad cum deserunt excepturi culpa inventore? Totam inventore ipsa porro.</motion.p>
        <motion.div variants={slideFromRigth} className="btn-box btns">
          <a href="#" className='btn'>Read more</a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About