import React from 'react';
import './Cards.css';
import Card from './Card/Card';
import MyImage from '../../images/img-3.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Here are some of my projects. See more on Github. </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card
              src={MyImage}
              text='A Mobile Resposive burger building application built using React Js React Router and ReduxJs. Also applied proper authentication and form validation.'
              label='React: Burger Builder'
              path='/projects'
            />
            <Card
              src='images/img-9.jpg'
              text='An eCommerce web application built with data persistency for anonymous users and production-grade user authentication using Node.js, Express and a custom built database.'
              // eslint-disable-next-line
              label='Javascript: Server Side Rendering'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <Card
              src='images/img-9.jpg'
              text='A Task Manager application that utilizes the Context API to disperse state and functionality to the applicable areas within the app. '
              label=' React: C.R.U.D.'
              path='/projects'
            />
            <Card
              src='images/img-9.jpg'
              text='An eCommerce web application built with data persistency for anonymous users and production-grade user authentication using Node.js, Express and a custom built database.'
              // eslint-disable-next-line
              label='Javascript: Server Side Rendering'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
