import React from 'react';

import './styles.css';

import logo from '../../assets/img/energizar-logo.png';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="menu-header-container">
          <img className="logo" src={logo} alt="logo" />
          <div className="menu">
            <a href="/">Home</a>
            <a href="/">Sobre</a>
            <a href="/">Notícias</a>
            <a href="/">Contato</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
