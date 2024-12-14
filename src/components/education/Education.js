import React from 'react'
import './Education.css'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { pageAnimation, slideFromRigth } from '../../animations';

import calendar from '../../assets/calendar.svg'

const Education = () => {

    const [element, view] = useInView({ threshold: 0.3 });

    return (
        <motion.div className='education' variants={pageAnimation} ref={element} animate={view ? "show" : "exit"} initial="hidden">
            <motion.h2 variants={slideFromRigth}>My <span>Journey</span></motion.h2>
            <div className="education-row">
                <div className="education-column">
                    <motion.h3 variants={slideFromRigth} className="title">Educations</motion.h3>
                    <motion.div variants={slideFromRigth} className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2018-19</div>
                                <h3>Finished school</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2019-20</div>
                                <h3>Finished school</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2021-22</div>
                                <h3>Finished school</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
                <div className="education-column">
                    <motion.h3 variants={slideFromRigth} className="title">Expierence</motion.h3>
                    <motion.div  variants={slideFromRigth} className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2018-19</div>
                                <h3>Freelance</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2019-20</div>
                                <h3>Freelance</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><img src={calendar} alt="calendar" className='bx bxs-calendar'/>2021-22</div>
                                <h3>Freelance</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non, velit deleniti eum voluptates quibusdam aperiam dicta adipisci optio ex!</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Education