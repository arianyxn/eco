import React from 'react';
import './FooterSection.css';
import ecocycleLogo from '../../assets/Ecocycle.png'; // Логотип
import instagramIcon from '../../assets/instagram-icon.png'; // Иконка Instagram
import tiktokIcon from '../../assets/tiktok-icon.png'; // Иконка TikTok
import linkedinIcon from '../../assets/linkedin-icon.png'; // Иконка LinkedIn
import youtubeIcon from '../../assets/youtube-icon.png'; // Иконка YouTube
import twitterIcon from '../../assets/twitter-icon.png'; // Иконка Twitter

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-main-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={ecocycleLogo} alt="Ecocycle Logo" className="footer-logo-image" />
          </div>
          <div className="footer-socials">
            <a href="https://instagram.com" className="footer-social-link">
              <img src={instagramIcon} alt="Instagram" className="footer-social-icon" />
            </a>
            <a href="https://tiktok.com" className="footer-social-link">
              <img src={tiktokIcon} alt="TikTok" className="footer-social-icon" />
            </a>
            <a href="https://linkedin.com" className="footer-social-link">
              <img src={linkedinIcon} alt="LinkedIn" className="footer-social-icon" />
            </a>
            <a href="https://youtube.com" className="footer-social-link">
              <img src={youtubeIcon} alt="YouTube" className="footer-social-icon" />
            </a>
            <a href="https://twitter.com" className="footer-social-link">
              <img src={twitterIcon} alt="Twitter" className="footer-social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <a href="#statistics" className="footer-link">Статистики</a>
          <a href="#research" className="footer-link">Исследования</a>
          <a href="#comments" className="footer-link">Комментарии</a>
          <a href="#info" className="footer-link">Актуальная информация</a>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">© 2025 Все права защищены</span>
          <span className="footer-created-by">Created by Ariana</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;