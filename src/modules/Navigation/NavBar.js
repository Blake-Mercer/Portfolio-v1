import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navBar'>
        <div className='navbar-containment'>
          <Link to='/' className='navbar-Logo' onClick={closeMobileMenu}>
            PortfolioHub <i className='fas fa-fire-alt'></i>
          </Link>
          <div className='menu-icon1' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu1 active1' : 'nav-menu1'}>
            <li className='nav-El'>
              <Link to='/' className='nav-linky' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-El'>
              <Link
                to='/projects'
                className='nav-linky'
                onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-El'>
              <Link
                to='/contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='bttn__outline'>Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
