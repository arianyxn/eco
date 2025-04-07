import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ConclusionSection.css';
import conclusionBackground from '../../assets/ConclutionSection.jpg';
import bigStarIcon from '../../assets/bigstar.png';
import scrollToSection from '../../utils/scrollToSection';

import infoIcon from '../../assets/info-icon.png';
import futureIcon from '../../assets/future-icon.png';
import educationIcon from '../../assets/education-icon.png';
import solutionIcon from '../../assets/solution-icon.png';
import interactionIcon from '../../assets/interaction-icon.png';

const ConclusionSection = () => {
  // Хук для отслеживания видимости секции
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  // Варианты анимации для появления слева
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }, 
  };

  // Массив с текстами и иконками
  const benefits = [
    { text: 'Актуальная экологическая информация', icon: infoIcon },
    { text: 'Сотрудничество для устойчивого будущего', icon: futureIcon },
    { text: 'Образование и осведомленность', icon: educationIcon },
    { text: 'Реалистичные решения', icon: solutionIcon },
    { text: 'Простота взаимодействия', icon: interactionIcon },
  ];

  return (
    <section
      className="conclusion-section"
      style={{ backgroundImage: `url(${conclusionBackground})` }}
      ref={ref}
    >
      <div className="conclusion-main-container">
        <motion.div
          className="conclusion-subcontainer conclusion-subcontainer-1"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 0 }}
        >
          <motion.div
            className="conclusion-header-wrapper"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.2 }}
          >
            <img src={bigStarIcon} alt="Big Star Icon" className="conclusion-star-icon" />
            <h3 className="conclusion-header-title">Ключевые выводы</h3>
          </motion.div>
          <motion.h2
            className="conclusion-subcontainer-1-title"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.4 }}
          >
            Внесите свой вклад в экологию с Ecocycle
          </motion.h2>
          <motion.p
            className="conclusion-subcontainer-1-subtitle"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.6 }}
          >
            Присоединяйтесь к Ecocycle — экологической информационной платформе, где каждый может внести свой вклад в решение глобальных экологических проблем, используя актуальные данные и предложенные решения.
          </motion.p>
          <motion.button
            className="conclusion-subcontainer-1-button"
            onClick={() => scrollToSection('form')}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.8 }}
          >
            Приступить
            <span className="conclusion-button-arrow">→</span>
          </motion.button>
        </motion.div>
        <motion.div
          className="conclusion-subcontainer conclusion-subcontainer-2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 1.0 }}
        >
          <div className="conclusion-benefits-wrapper">
            <motion.div
              className="conclusion-benefits-list"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 1.2 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="conclusion-benefit-item">
                  <span className="conclusion-benefit-text">{benefit.text}</span>
                  <img src={benefit.icon} alt="Benefit Icon" className="conclusion-benefit-icon" />
                </div>
              ))}
              {benefits.map((benefit, index) => (
                <div key={`duplicate-${index}`} className="conclusion-benefit-item">
                  <span className="conclusion-benefit-text">{benefit.text}</span>
                  <img src={benefit.icon} alt="Benefit Icon" className="conclusion-benefit-icon" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSection;