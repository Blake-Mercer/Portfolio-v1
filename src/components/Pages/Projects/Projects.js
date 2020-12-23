import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <main>
      <article className='flex_columns'>
        <div className='row'>
          <div className='column'>
            <div className='column_1'>
              <img src='/images/img-9.jpg' alt='' />
            </div>
          </div>
          <div className='column'>
            <div className='column_2 bg_light'>
              <h2>Blog Post One</h2>
              <p className='meta'>
                <i className='fas fa-user'></i> Posted by
                <strong>John Doe</strong> | April 19 2020
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                illum, animi earum ea amet sequi reiciendis sit corporis sunt
                iusto cupiditate odio maxime adipisci cumque eligendi nemo
                dolore id itaque?
              </p>
              <a
                href='https://www.youtube.com/watch?v=pCA4qpQDZD8&t=3614s'
                className='btn btn_dark'>
                <i className='fas fa-chevron'></i>
                Live Code
              </a>
            </div>
          </div>
        </div>
      </article>

      <article className='flex_columns flex_reverse'>
        <div className='row'>
          <div className='column'>
            <div className='column_1'>
              <img src='/images/img-4.jpg' alt='' />
            </div>
          </div>
          <div className='column'>
            <div className='column_2 bg_dark'>
              <h2>Blog Post Two</h2>
              <p className='meta'>
                <i className='fas fa-user'></i> Posted by
                <strong>Jane Doe</strong> | April 21 2020
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                illum, animi earum ea amet sequi reiciendis sit corporis sunt
                iusto cupiditate odio maxime adipisci cumque eligendi nemo
                dolore id itaque?
              </p>
              <a href='s' className='btn btn_light'>
                <i className='fas fa-chevron'></i>
                Live Code
              </a>
            </div>
          </div>
        </div>
      </article>

      <article className='flex_columns'>
        <div className='row'>
          <div className='column'>
            <div className='column_1'>
              <img src='/images/img-8.jpg' alt='' />
            </div>
          </div>
          <div className='column'>
            <div className='column_2 bg_light'>
              <h2>Blog Post Three</h2>
              <p className='meta'>
                <i className='fas fa-user'></i> Posted by
                <strong>John Doe</strong> | April 23 2020
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                illum, animi earum ea amet sequi reiciendis sit corporis sunt
                iusto cupiditate odio maxime adipisci cumque eligendi nemo
                dolore id itaque?
              </p>
              <a href='s' className='btn btn_dark'>
                <i className='fas fa-chevron'></i>
                Live Code
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Projects;
