import React from 'react';
import './MissionSection.css';
import { motion } from 'framer-motion'; // Импортируем framer-motion
import missionBackground from '../../assets/MissionSection.jpg';
import starIcon from '../../assets/star.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';

const MissionSection = () => {
  // Данные для бегущих строк с первой заглавной буквой
  const tickerTopItems = [
    'Надежная информация',
    'Эффективные методы',
    'Активное сообщество',
    'Устойчивое развитие',
  ];

  const tickerBottomItems = [
    'Экспертные решения',
    'Доступные данные',
    'Инновационные технологии',
    'Удобный интерфейс',
  ];

  // Дублируем элементы много раз для эффекта бесконечности
  const repeatedTickerTopItems = Array(10).fill(tickerTopItems).flat();
  const repeatedTickerBottomItems = Array(10).fill(tickerBottomItems).flat();

  // Варианты анимации для синхронизации
  const tickerVariants = {
    animate: {
      x: ['0%', '-50%'], // Движение для верхнего контейнера (вправо)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 150, // Увеличиваем до 80 секунд для очень медленного движения
          ease: 'linear',
        },
      },
    },
  };

  const tickerBottomVariants = {
    animate: {
      x: ['-50%', '0%'], // Движение для нижнего контейнера (влево)
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 150, // Увеличиваем до 80 секунд для очень медленного движения
          ease: 'linear',
        },
      },
    },
  };

  return (
    <section className="mission-section" style={{ backgroundImage: `url(${missionBackground})` }}>
      <div className="mission-main-container">
        <div className="mission-text-container">
          <div className="mission-title-wrapper">
            <img src={starIcon} alt="Star Icon" className="mission-star-icon" />
            <h2 className="mission-header-title">Наша миссия</h2>
          </div>
          <h3 className="mission-main-subtitle">
            Как создать возможности для изменения мира?
          </h3>
          <p className="mission-main-description">
            Преобразовывать знания в доступные и понятные решения для каждого, создавая возможности для улучшения мира.
          </p>
        </div>
        <div className="mission-cards-container">
          <div className="mission-card">
            <img src={icon1} alt="Icon 1" className="mission-card-icon" />
            <h4 className="mission-card-title">Инновации для устойчивого будущего</h4>
            <p className="mission-card-text">
              Внедряем технологии, которые сохраняют ресурсы и снижают воздействие на природу.
            </p>
          </div>
          <div className="mission-card">
            <img src={icon2} alt="Icon 2" className="mission-card-icon" />
            <h4 className="mission-card-title">Образование для осознанного выбора</h4>
            <p className="mission-card-text">
              Помогаем принимать экологически ответственные решения через доступные знания.
            </p>
          </div>
          <div className="mission-card">
            <img src={icon3} alt="Icon 3" className="mission-card-icon" />
            <h4 className="mission-card-title">Сообщество для глобальных изменений</h4>
            <p className="mission-card-text">
              Объединяем людей для создания устойчивого будущего вместе.
            </p>
          </div>
        </div>
        <div className="mission-animation-container">
          <div className="mission-ticker-top">
            <motion.div
              className="mission-ticker-content"
              variants={tickerVariants}
              animate="animate"
            >
              {repeatedTickerTopItems.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
              {repeatedTickerTopItems.map((item, index) => (
                <span key={`duplicate-${index}`}>{item}</span>
              ))}
            </motion.div>
          </div>
          <div className="mission-ticker-bottom">
            <motion.div
              className="mission-ticker-content"
              variants={tickerBottomVariants}
              animate="animate"
            >
              {repeatedTickerBottomItems.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
              {repeatedTickerBottomItems.map((item, index) => (
                <span key={`duplicate-${index}`}>{item}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;