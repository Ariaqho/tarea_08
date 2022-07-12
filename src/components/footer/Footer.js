import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='footer-info'>
    <h1>Lorem</h1>
    </div>
    <div className='footer-contact'>
        <h4>In cauda semper</h4>
    </div>
    <div className='sns-links'>
        <div className='contact'>Contact me</div>
        <div className='links'>
        <a href='https://www.linkedin.com/in/felipe-maldonado-nunez/'target='_blank' rel='noreferrer'>
            <i className='fab fa-linkedin linkedin'></i>
        </a>
        <a href='https://github.com/Ariaqho'target='_blank' rel='noreferrer'>
            <i className='fab fa-github github'></i>
        </a>
        </div>
    </div>
    </footer>
  )
}

export default Footer