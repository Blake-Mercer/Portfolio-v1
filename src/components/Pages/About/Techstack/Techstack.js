import React from 'react';
import { Col } from 'react-bootstrap';
import './Techstack.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Techstack(props) {
  return (
    <div>
      <Col xs={4} className='tech-icons'>
        <i className={`${props.iconName} tech-icon-images`}></i>
      </Col>
    </div>
  );
}

export default Techstack;
