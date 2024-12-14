import React from 'react';
import './Home.css';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { pageAnimation, slideFromRigth } from '../../animations';

import github from '../../assets/logos/github.svg';
import linkedin from '../../assets/logos/linkedin.svg';

const Home = () => {
    
    const [element, view] = useInView({ threshold: 0.3 });

    return ( 
        <motion.div variants={pageAnimation} ref={element} animate={view ? "show" : "exit"} initial="hidden">
            <div className='home-info'>
                <div className="home-content">
                    <motion.h1 variants={slideFromRigth}>Hi, I'm <span>Narek Aleksanyan</span></motion.h1>
                    <motion.div variants={slideFromRigth} className="text-animate">
                        <h3>Frontend Developer</h3>
                    </motion.div>
                    <motion.p variants={slideFromRigth} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita officiis nobis hic quibusdam harum, modi odit dolor ab sit optio impedit tempora nesciunt consectetur a rerum.</motion.p>
                
                    <motion.div variants={slideFromRigth} className="btn-box">
                        <h4 className="btn">hire me</h4>
                        <h4 className="btn">Let's talk</h4>
                    </motion.div>
                </div>
                <div className='home-sci'>
                    <motion.a variants={slideFromRigth} href="https://github.com/Hayk7JS7?tab=repositories" target='__blanket'><img src={github} alt="git" className='bx bxl-github' /></motion.a>
                    <motion.a variants={slideFromRigth} href="https://www.linkedin.com/onboarding/start/profile-location/new/" target='__blanket'><img src={linkedin} alt="linkedin" className='bx-bxl-linked' /></motion.a>
                </div>
            </div>
            <motion.div variants={slideFromRigth} className='home-imgHover' />
        </motion.div>
    )
}

export default Home
