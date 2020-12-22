import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const STYLES = ['btn__primary', 'btn__outline'];

const SIZES = ['btn__medium', 'btn__large'];

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
    <Link to='/contact' className='btn_mobile'>
      <button
        className={`btn1 ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
