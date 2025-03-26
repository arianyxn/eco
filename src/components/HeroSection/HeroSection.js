import React from 'react';
import { motion } from 'framer-motion'; // Импортируем framer-motion
import './HeroSection.css';
import questionMark from '../../assets/button1.png'; // Первое изображение для кнопки
import updateIcon from '../../assets/button2.png'; // Второе изображение для кнопки
import ecoImage1 from '../../assets/eco-image1.png'; // Первое изображение (планета)
import ecoImage2 from '../../assets/eco-image2.png'; // Второе изображение (лампочка)

const HeroSection = () => {
  // Анимация для движения вверх-вниз через framer-motion (React)
  const floatAnimation = {
    y: [0, -10, 0], // Движение: 0 -> -10px -> 0
    transition: {
      repeat: Infinity, // Бесконечный цикл
      duration: 3, // Длительность анимации 3 секунды
      ease: 'easeInOut', // Плавное движение
    },
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Современные экологические проблемы.</h1>
        <p className="hero-subtitle">
          Всегда будьте в курсе экологических проблем и их путей предотвращения, чтобы сохранить нашу планету. Внесите вклад в наше яркое будущее.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">
            <img src={questionMark} alt="Button 1 Icon" className="btn-icon" />
            Узнать больше
          </button>
          <button className="btn btn-secondary">
            <img src={updateIcon} alt="Button 2 Icon" className="btn-icon" />
            Получить обновления
          </button>
        </div>
        <div className="quote-frame">
          <p className="quote-text quote-text-1">
            *Поддерживайте чистоту и порядок.*
          </p>
          <p className="quote-text quote-text-2">
            *Природа не терпит неточностей и не прощает ошибок.*
          </p>
        </div>
        <div className="info-box">
          100+ стран испытывают экологические трудности.
        </div>
        <motion.img
          src={ecoImage1}
          alt="Eco Image 1"
          className="eco-image eco-image-1"
          animate={floatAnimation}
        />
        <motion.img
          src={ecoImage2}
          alt="Eco Image 2"
          className="eco-image eco-image-2"
          animate={floatAnimation}
        />
      </div>
    </section>
  );
};

export default HeroSection;