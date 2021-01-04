import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <article className='flex_columns flex_reverse'>
        <div className='row'>
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

      {/* <section id='about-info' className='bg-light py-3'>
        <div className='container'>
          <div className='info-left'>
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
          <div className='info-right'>
            <img src='/images/img-home.jpg' alt='hotel' />
          </div>
        </div>
      </section>

      <div className='clr'></div> */}

      <section id='testimonials' className='py-3'>
        <div className='container'>
          <h2 className='l-heading'>What Should I Put Here?</h2>
          <div className='testimonial bg-primary'>
            <img src='/images/img-home.jpg' alt='Samantha' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eligendi quibusdam, dolorum maxime cum numquam quisquam, deleniti
              eum incidunt, velit non consectetur. Facere, ipsa maxime, ullam id
              amet odio laboriosam sit iusto tempore fugit exercitationem, a
              dolore quo maiores nisi!
            </p>
          </div>

          <div className='testimonial bg-primary'>
            <img src='/images/img-home.jpg' alt='Jen' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              eligendi quibusdam, dolorum maxime cum numquam quisquam, deleniti
              eum incidunt, velit non consectetur. Facere, ipsa maxime, ullam id
              amet odio laboriosam sit iusto tempore fugit exercitationem, a
              dolore quo maiores nisi!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
