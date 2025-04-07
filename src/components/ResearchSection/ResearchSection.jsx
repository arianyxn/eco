import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ResearchSection.css';
import researchBackground from '../../assets/ResearchSection.jpg';
import bigStar from '../../assets/bigstar.png';
import cardImage1 from '../../assets/card-image1.jpg';
import cardImage2 from '../../assets/card-image2.jpg';
import cardImage3 from '../../assets/card-image3.jpg';
import cardImage4 from '../../assets/card-image4.jpg';

const ResearchSection = ({ id }) => {
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

  // Варианты анимации для карточек (с добавлением hover-эффекта)
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  const cards = [
    {
      category: 'Загрязнение',
      title: 'Воздух под угрозой',
      description:
        'Каждый год миллионы людей страдают от заболеваний, вызванных загрязнением воздуха. Узнайте, как мы можем это изменить.',
      image: cardImage1,
    },
    {
      category: 'Климат',
      title: 'Глобальное потепление',
      description:
        'Температура на планете растёт, вызывая экстремальные погодные условия. Что мы можем сделать, чтобы замедлить этот процесс?',
      image: cardImage2,
    },
    {
      category: 'Отходы',
      title: 'Пластик в океанах',
      description:
        'Ежегодно в океаны попадает более 8 миллионов тонн пластика. Узнайте, как сократить использование одноразового пластика.',
      image: cardImage3,
    },
    {
      category: 'Ресурсы',
      title: 'Истощение лесов',
      description:
        'Леса — лёгкие нашей планеты, но они исчезают с угрожающей скоростью. Как мы можем защитить их для будущих поколений?',
      image: cardImage4,
    },
  ];

  return (
    <section
      id={id}
      className="research-section"
      style={{ backgroundImage: `url(${researchBackground})` }}
      ref={ref}
    >
      <div className="research-container">
        <motion.div
          className="title-wrapper"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
        >
          <img src={bigStar} alt="Big Star" className="big-star" />
          <h3 className="research-title">Исследования</h3>
        </motion.div>
        <motion.h2
          className="research-title-main"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 0.2 }}
        >
          Что нам известно?
        </motion.h2>
        <motion.p
          className="research-description"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 0.4 }}
        >
          Для поддержания Земли и борьбы с экологическими проблемами наши исследователи всегда собирают достоверную информацию, тщательно проверяя ее перед публикацией новостей.
        </motion.p>
        <motion.div
          className="research-cards-container"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 0.6 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="research-card"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover="hover"
              transition={{ delay: 0.8 + index * 0.2 }} // Задержка для каждой карточки
            >
              <img src={card.image} alt={card.title} className="research-card-image" />
              <div className="research-card-content">
                <span className="research-card-category">{card.category}</span>
                <h3 className="research-card-title">{card.title}</h3>
                <p className="research-card-description">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;