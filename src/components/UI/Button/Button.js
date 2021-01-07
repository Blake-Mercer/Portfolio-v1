import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const STYLES = ['bttn__primary', 'bttn__outline'];

const SIZES = ['bttn__medium', 'bttn__large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/contact' className='bttn_mobile'>
      <button
        className={`bttn1 ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
