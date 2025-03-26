import React from 'react';
import './Header.css';
import ecocycleLogo from '../../assets/Ecocycle.png'; // Импортируем логотип

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Логотип */}
        <img src={ecocycleLogo} alt="Ecocycle Logo" className="logo" />
        <nav>
          <ul className="nav-list">
            <li className="nav-item nav-item-1">
              <a href="#research">Исследования</a>
            </li>
            <li className="nav-item nav-item-2">
              <a href="#problems">Проблемы</a>
            </li>
            <li className="nav-item nav-item-3">
              <a href="#statistics">Статистики</a>
            </li>
            <li className="nav-item nav-item-4">
              <a href="#actual">Актуальная информация</a>
            </li>
          </ul>
        </nav>
        <button className="login-btn">Подписаться</button>
      </div>
    </header>
  );
};

export default Header;