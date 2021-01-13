import React from 'react';
import { Row, Container } from 'react-bootstrap';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Techstack from './Techstack/Techstack';
import BlakeImage from '../../../images/riding.png';

const About = () => {
  return (
    <>
      <article className='flex_columns flex_reverse'>
        <div className='rows'>
          <div className='column'>
            <div className='column_1'>
              <img src={BlakeImage} alt='' />
            </div>
          </div>
          <div className='column'>
            <div className='column_2 bk_light'>
              <h1 className='l-heading'>
                <span className='text-primary'>About</span> Blake Mercer
              </h1>
              <p>
                Hey, I'm Blake Mercer from Connecticut. I studied statistics at
                Arizona State University. I have several years experience in UX
                and Media. Now I use those skills to build user friendly web
                applications.
              </p>
              <p>
                The logic of web development strengthens my analytical side.
                While designing websites and web apps allow for some awesome
                creative expression.
              </p>
              <p>
                Apart from coding, some other activities that I like are trivia,
                pickup soccer, and light reading!
              </p>
            </div>
          </div>
        </div>
      </article>

      <section id='testimonials' className='py-3'>
        <div className='container'>
          <h2 className='l-heading'>Technologies In My Toolkit</h2>
          <Container>
            <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
              <Techstack iconName='devicon-javascript-plain ' />
              <Techstack iconName='devicon-react-original ' />
              <Techstack iconName='devicon-nodejs-plain ' />
              <Techstack iconName='devicon-express-original-wordmark' />
              <Techstack iconName='devicon-bootstrap-plain ' />
              <Techstack iconName='devicon-git-plain ' />
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default About;
