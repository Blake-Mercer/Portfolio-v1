import React from 'react';
import { Row, Container } from 'react-bootstrap';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Techstack from './Techstack/Techstack';

const About = () => {
  return (
    <>
      <article className='flex_columns flex_reverse'>
        <div className='rows'>
          <div className='column'>
            <div className='column_1'>
              <img src='/images/img-home.jpg' alt='' />
            </div>
          </div>
          <div className='column'>
            <div className='column_2 bg_light'>
              <h1 className='l-heading'>
                <span className='text-primary'>About</span> Blake Mercer
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem veritatis illo, similique labore voluptate nulla
                animi dolorum eius laborum illum, nesciunt quod reprehenderit
                dicta autem vel nobis minima sit deleniti!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit
                voluptatem impedit voluptate. Doloribus, voluptas dolore!
                Cupiditate aliquid sequi deserunt.
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
              <Techstack iconName='devicon-cplusplus-line' />
              <Techstack iconName='devicon-python-plain-wordmark ' />
              <Techstack iconName='devicon-javascript-plain ' />
              <Techstack iconName='devicon-python-plain-wordmark ' />
              <Techstack iconName='devicon-javascript-plain ' />
              <Techstack iconName='devicon-javascript-plain ' />
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default About;
