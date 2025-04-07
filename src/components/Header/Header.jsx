import React from 'react';
import './Header.css';
import ecocycleLogo from '../../assets/Ecocycle.png'; 
import scrollToSection from '../../utils/scrollToSection'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img
          src={ecocycleLogo}
          alt="Ecocycle Logo"
          className="logo"
          onClick={() => scrollToSection('hero')}
          style={{ cursor: 'pointer' }}
        />
        <nav>
          <ul className="nav-list">
            <li className="nav-item nav-item-1">
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('research');
                }}
              >
                Исследования
              </a>
            </li>
            <li className="nav-item nav-item-2">
              <a
                href="#problems"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('problems');
                }}
              >
                Проблемы
              </a>
            </li>
            <li className="nav-item nav-item-3">
              <a
                href="#statistics"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('statistics');
                }}
              >
                Статистики
              </a>
            </li>
            <li className="nav-item nav-item-4">
              <a
                href="#actual"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('actual');
                }}
              >
                Актуальная информация
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="login-btn"
          onClick={() => scrollToSection('form')}
        >
          Подписаться
        </button>
      </div>
    </header>
  );
};

export default Header;