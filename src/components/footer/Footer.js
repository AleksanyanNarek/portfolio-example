import React from 'react'
import './Footer.css'

import arrowUp from '../../assets/arrowUp.svg';

const Footer = ({ homeRef }) => {

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by codehal | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop" onClick={() => homeRef.current?.scrollIntoView({behavior: 'smooth'})} >
        <img src={arrowUp} alt="arrowUp" />
      </div>
    </footer>
  )
}

export default Footer;