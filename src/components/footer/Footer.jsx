import React from 'react';
import './footer.css';
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Siddharth</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#testimonials">testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.instagram.com/si.ddharth9551/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/siddharth-tamboli-6229291b6/"><AiOutlineLinkedin/></a>
        <a href="https://wa.me/919602107844?text="><BsWhatsapp/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; SIDDHARTH TAMBOLI. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer