import React from 'react';
import '../../App.css';
import Button from '../UI/Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>Blake Mercer</h1>
      <p>Front-End Engineer</p>
      <div className='hero-btns'>
        <Button
          className='bttn1'
          buttonStyle='bttn__outline'
          buttonSize='bttn__medium'>
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
