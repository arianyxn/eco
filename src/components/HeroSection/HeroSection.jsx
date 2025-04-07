import React from 'react';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import './HeroSection.css';
import questionMark from '../../assets/button1.png'; 
import updateIcon from '../../assets/button2.png'; 
import ecoImage1 from '../../assets/eco-image1.png'; 
import ecoImage2 from '../../assets/eco-image2.png'; 
import containerBackground from '../../assets/Container.jpg'; 
import scrollToSection from '../../utils/scrollToSection';

const HeroSection = ({ id }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut',
    },
  };

  return (
    <section
      id={id}
      className="hero-section"
      style={{ backgroundImage: `url(${containerBackground})` }}
      ref={ref}
    >
      <div className="hero-container">
        <motion.h1
          className="hero-title"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          Современные экологические проблемы.
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Всегда будьте в курсе экологических проблем и их путей предотвращения, чтобы сохранить нашу планету. Внесите вклад в наше яркое будущее.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('mission')}
          >
            <img src={questionMark} alt="Button 1 Icon" className="btn-icon" />
            Узнать больше
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection('form')}
          >
            <img src={updateIcon} alt="Button 2 Icon" className="btn-icon" />
            Получать обновления
          </button>
        </motion.div>
        <motion.div
          className="quote-frame"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <p className="quote-text quote-text-1">
            *Поддерживайте чистоту и порядок.*
          </p>
          <p className="quote-text quote-text-2">
            *Природа не терпит неточностей и не прощает ошибок.*
          </p>
        </motion.div>
        <motion.div
          className="info-box"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          100+ стран испытывают экологические трудности.
        </motion.div>
        <motion.img
          src={ecoImage1}
          alt="Eco Image 1"
          className="eco-image eco-image-1"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ delay: 1.0 }}
          whileInView={floatAnimation}
        />
        <motion.img
          src={ecoImage2}
          alt="Eco Image 2"
          className="eco-image eco-image-2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ delay: 1.2 }}
          whileInView={floatAnimation}
        />
      </div>
    </section>
  );
};

export default HeroSection;