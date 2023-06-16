import React from 'react';
import './Navbar.scss';
import { images } from '../../constants/index';

const Navbar = () => {
  return (
    <nav>
      <img src={images.logo} alt="logo"></img>
    </nav>
  );
};

export default Navbar;
