import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Ecosys</div>
        <nav>
          <ul>
            <li><a href="#statistics">Статистика</a></li>
            <li><a href="#commands">Команды</a></li>
            <li><a href="#news">Новости</a></li>
            <li><a href="#actual">Актуально</a></li>
          </ul>
        </nav>
        <button className="login-btn">Подписаться</button>
      </div>
    </header>
  );
};

export default Header;