import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './StatisticSection.css';
import statisticBackground from '../../assets/StatisticSection.jpg';
import cubIcon from '../../assets/cub.png';
import statisticImage1 from '../../assets/statistic1.png';
import statisticImage2 from '../../assets/statistic2.png';
import statisticImage3 from '../../assets/statistic3.png';

const StatisticSection = ({ id }) => {
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
      className="statistic-section"
      style={{ backgroundImage: `url(${statisticBackground})` }}
      ref={ref}
    >
      <div className="statistic-container">
        <motion.div
          className="sub-container sub-container-1"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 0 }}
        >
          <div className="sub-container-left">
            <motion.div
              className="title-wrapper"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 0.2 }}
            >
              <img src={cubIcon} alt="Cub Icon" className="cub-icon" />
              <h3 className="statistics-title">Статистики</h3>
            </motion.div>
            <motion.h2
              className="statistic-title"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 0.4 }}
            >
              Загрязнение воздуха: PM2.5 и здоровье
            </motion.h2>
            <motion.ul
              className="statistic-points"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 0.6 }}
            >
              <li>К 2025 году более 90% городского населения в странах Азии и Африки будет подвержено уровням PM2.5, превышающим нормы ВОЗ.</li>
              <li>В Индии и Китае уровень PM2.5 в крупных городах может достигать 150-200 мкг/м³ (при норме 25 мкг/м³).</li>
            </motion.ul>
            <motion.p
              className="statistic-problem"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 0.8 }}
            >
              Проблема: Увеличение случаев заболеваний дыхательных путей и сердечно-сосудистых заболеваний.
            </motion.p>
            <motion.div
              className="more-info"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 1.0 }}
            >
              <span>Узнать больше</span>
              <span className="arrow">→</span>
            </motion.div>
          </div>
          <motion.div
            className="sub-container-right"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 1.2 }}
          >
            <img src={statisticImage1} alt="Statistic Image 1" className="statistic-image" />
          </motion.div>
        </motion.div>

        <motion.div
          className="sub-container sub-container-2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            className="sub-container-left-2"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 1.6 }}
          >
            <img src={statisticImage2} alt="Statistic Image 2" className="statistic-image" />
          </motion.div>
          <div className="sub-container-right-2">
            <motion.div
              className="title-wrapper"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 1.8 }}
            >
              <img src={cubIcon} alt="Cub Icon" className="cub-icon" />
              <h3 className="statistics-title">Статистики</h3>
            </motion.div>
            <motion.h2
              className="statistic-title-2"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 2.0 }}
            >
              Потеря биоразнообразия: вырубка лесов
            </motion.h2>
            <motion.ul
              className="statistic-points-2"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 2.2 }}
            >
              <li>К 2025 году в Амазонии может быть потеряно еще 5-10% лесов из-за вырубки и пожаров.</li>
              <li>В Индонезии и Малайзии ежегодно исчезает до 2 млн гектаров тропических лесов.</li>
            </motion.ul>
            <motion.p
              className="statistic-problem-2"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 2.4 }}
            >
              Проблема: Исчезновение уникальных видов животных и растений, нарушение экосистем.
            </motion.p>
            <motion.div
              className="more-info"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 2.6 }}
            >
              <span>Узнать больше</span>
              <span className="arrow">→</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="sub-container sub-container-3"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 2.8 }}
        >
          <div className="sub-container-left-3">
            <motion.div
              className="title-wrapper"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 3.0 }}
            >
              <img src={cubIcon} alt="Cub Icon" className="cub-icon" />
              <h3 className="statistics-title">Статистики</h3>
            </motion.div>
            <motion.h2
              className="statistic-title-3"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 3.2 }}
            >
              Изменение климата: повышение уровня моря
            </motion.h2>
            <motion.ul
              className="statistic-points-3"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 3.4 }}
            >
              <li>К 2025 году уровень моря может подняться на 3-5 см, что угрожает островным государствам (Мальдивы, Тувалу).</li>
              <li>Более 50% населения прибрежных зон столкнутся с риском наводнений.</li>
            </motion.ul>
            <motion.p
              className="statistic-problem-3"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 3.6 }}
            >
              Проблема: Потеря территорий, миграция населения, разрушение инфраструктуры.
            </motion.p>
            <motion.div
              className="more-info"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 3.8 }}
            >
              <span>Узнать больше</span>
              <span className="arrow">→</span>
            </motion.div>
          </div>
          <motion.div
            className="sub-container-right-3"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 4.0 }}
          >
            <img src={statisticImage3} alt="Statistic Image 3" className="statistic-image" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticSection;