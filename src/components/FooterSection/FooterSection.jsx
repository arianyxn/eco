import React from 'react';
import './FooterSection.css';
import scrollToSection from '../../utils/scrollToSection'; 

import ecocycleLogo from '../../assets/Ecocycle.png'; 
import instagramIcon from '../../assets/instagram-icon.png'; 
import tiktokIcon from '../../assets/tiktok-icon.png'; 
import linkedinIcon from '../../assets/linkedin-icon.png';
import youtubeIcon from '../../assets/youtube-icon.png';
import twitterIcon from '../../assets/twitter-icon.png'; 

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-main-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={ecocycleLogo} alt="Ecocycle Logo" className="footer-logo-image" onClick={() => scrollToSection('hero')}/>
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
          <p>Contacts:</p>
          <p>+7 777 455 3456</p>
          <p>ecocycle@globalinformation.com</p>
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