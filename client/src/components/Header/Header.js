import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link  className='header__link' to='/'>
        <img  className='header__logo' src="#" alt="header-logo" />
      </Link>
      <nav className='header__navlist'>
        <Link  className='header__link' to='/'>
          <p className='header__navlist-item'>Home</p>
        </Link>
        <Link  className='header__link' to='#'>
          <p className='header__navlist-item'>About</p>
        </Link>
        <Link  className='header__link' to='/organizations'>
          <p className='header__navlist-item'>Organizations</p>
        </Link>
        <Link  className='header__link' to='/login'>
          <p className='header__navlist-item'>Login</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;