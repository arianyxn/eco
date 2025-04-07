import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FormSection.css';
import formBackground from '../../assets/FormSection.jpg';

const FormSection = ({ id }) => {
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

  return (
    <section
      id={id}
      className="form-section"
      style={{ backgroundImage: `url(${formBackground})` }}
      ref={ref}
    >
      <div className="form-main-container">
        <motion.h2
          className="form-heading-title"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 0 }}
        >
          Будьте в курсе экологических новостей
        </motion.h2>
        <motion.div
          className="form-content-wrapper"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="form-subheading"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.4 }}
          >
            <p>
              Ecocycle - это место, где информация о состоянии экологии становится доступной каждому. Мы собираем и анализируем данные, чтобы помочь вам принимать обоснованные решения и активно участвовать в улучшении нашей планеты. Присоединяйтесь к сообществу, делитесь идеями и станьте частью глобальных усилий по решению экологических проблем.
            </p>
          </motion.div>
          <motion.div
            className="form-input-section"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.6 }}
          >
            <form className="form-input-form">
              <input type="text" placeholder="Имя" className="form-input" required />
              <input type="email" placeholder="Email" className="form-input" required />
              <input type="text" placeholder="Локация" className="form-input" required />
              <button type="submit" className="form-submit-button">Отправить</button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormSection;