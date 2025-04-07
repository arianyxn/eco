import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './MissionSection.css';
import missionBackground from '../../assets/MissionSection.jpg';
import starIcon from '../../assets/star.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';

const MissionSection = ({ id }) => {
  // Хук для отслеживания видимости секции
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация только один раз
    threshold: 0.2, // Секция видима после 20% области видимости
  });

  // Варианты анимации для появления слева
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 }, // Начальное состояние: прозрачный и смещён влево
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }, // Конечное состояние: видимый и на месте
  };

  // Данные для бегущих строк
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

  const repeatedTickerTopItems = Array(10).fill(tickerTopItems).flat();
  const repeatedTickerBottomItems = Array(10).fill(tickerBottomItems).flat();

  const tickerVariants = {
    animate: {
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 150,
          ease: 'linear',
        },
      },
    },
  };

  const tickerBottomVariants = {
    animate: {
      x: ['-50%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 150,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <section
      id={id}
      className="mission-section"
      style={{ backgroundImage: `url(${missionBackground})` }}
      ref={ref}
    >
      <div className="mission-main-container">
        <div className="mission-text-container">
          <motion.div
            className="mission-title-wrapper"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
          >
            <img src={starIcon} alt="Star Icon" className="mission-star-icon" />
            <h2 className="mission-header-title">Наша миссия</h2>
          </motion.div>
          <motion.h3
            className="mission-main-subtitle"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.2 }}
          >
            Как создать возможности для изменения мира?
          </motion.h3>
          <motion.p
            className="mission-main-description"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.4 }}
          >
            Преобразовывать знания в доступные и понятные решения для каждого, создавая возможности для улучшения мира.
          </motion.p>
        </div>
        <motion.div
          className="mission-cards-container"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="mission-card"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.8 }}
          >
            <img src={icon1} alt="Icon 1" className="mission-card-icon" />
            <h4 className="mission-card-title">Инновации для устойчивого будущего</h4>
            <p className="mission-card-text">
              Внедряем технологии, которые сохраняют ресурсы и снижают воздействие на природу.
            </p>
          </motion.div>
          <motion.div
            className="mission-card"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 1.0 }}
          >
            <img src={icon2} alt="Icon 2" className="mission-card-icon" />
            <h4 className="mission-card-title">Образование для осознанного выбора</h4>
            <p className="mission-card-text">
              Помогаем принимать экологически ответственные решения через доступные знания.
            </p>
          </motion.div>
          <motion.div
            className="mission-card"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 1.2 }}
          >
            <img src={icon3} alt="Icon 3" className="mission-card-icon" />
            <h4 className="mission-card-title">Сообщество для глобальных изменений</h4>
            <p className="mission-card-text">
              Объединяем людей для создания устойчивого будущего вместе.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="mission-animation-container"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 1.4 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;