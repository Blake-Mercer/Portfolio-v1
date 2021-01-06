import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer bg-dark'>
      <h3> Connect With Me!</h3>
      <div className='social'>
        <a href='#s'>
          <i className='fab fa-facebook fa-2x'></i>
        </a>
        <a href='#s'>
          <i className='fab fa-github fa-2x'></i>
        </a>
        <a href='#s'>
          <i className='fab fa-linkedin fa-2x'></i>
        </a>
      </div>
      <p>Copyright &copy; 2020 - PortfolioHub</p>
    </footer>
  );
};

export default Footer;
