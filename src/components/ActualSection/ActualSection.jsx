import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ActualSection.css';
import actualBackground from '../../assets/ActualSection.jpg';
import cosmosIcon from '../../assets/cosmos.png';
import scrollToSection from '../../utils/scrollToSection';

import image1 from '../../assets/slider-image1.jpg';
import image2 from '../../assets/slider-image2.jpg';
import image3 from '../../assets/slider-image3.jpg';

const ActualSection = ({ id }) => {
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

  // Создаем массив с 3 изображениями
  const slides = [
    {
      src: image1,
      title: 'ГЛОБАЛЬНОЕ ПОТЕПЛЕНИЕ',
      description: 'Повышение температуры Земли угрожает экосистемам и жизни человека.',
    },
    {
      src: image2,
      title: 'УНИЧТОЖЕНИЕ ЛЕСОВ',
      description: 'Вырубка лесов сокращает биоразнообразие и усиливает изменение климата.',
    },
    {
      src: image3,
      title: 'ПЛАСТИКОВОЕ ЗАГРЯЗНЕНИЕ ОКЕАНОВ',
      description: 'Пластик в океанах вреден для морских экосистем и здоровья человека.',
    },
  ];

  // Состояние для текущего индекса центрального изображения
  const [currentIndex, setCurrentIndex] = useState(0);
  // управления автопрокруткой
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Функция для переключения на предыдущее изображение
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    setIsAutoPlay(false); // Стоп автопрокрутке при ручном управлении
  };

  // Функция для переключения на след изображение
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    setIsAutoPlay(false); // Останавливаем автопрокрутку при ручном управлении
  };

  // Автопрокрутка с помощью useEffect
  useEffect(() => {
    if (!isAutoPlay) return; // Если автопрокрутка отключена, ничего не делаем

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Переключаем каждые 5 сек.

    // Очищаем интервал при размонтировании компонента или изменении isAutoPlay
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  return (
    <section
      id={id}
      className="actual-section"
      style={{ backgroundImage: `url(${actualBackground})` }}
      ref={ref}
    >
      <div className="actual-container">
        <motion.div
          className="actual-sub-container actual-sub-container-1"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 0 }}
        >
          <motion.div
            className="actual-title-wrapper"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.2 }}
          >
            <img src={cosmosIcon} alt="Cosmos Icon" className="cosmos-icon" />
            <h3 className="actual-title">Актуальные новости</h3>
          </motion.div>
          <motion.h2
            className="top-title"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.4 }}
          >
            Топ-3
          </motion.h2>
          <motion.p
            className="top-description"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 0.6 }}
          >
            Три главные экологические угрозы, которые обсуждаются во всем мире и требуют срочных решений.
          </motion.p>
        </motion.div>
        <motion.div
          className="actual-sub-container actual-sub-container-2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 0.8 }}
        >
          <div className="image-slider">
            <motion.div
              className="cards-wrapper"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 1.0 }}
            >
              {slides.map((slide, index) => {
                // Вычисляем позицию карточки относительно текущего индекса
                const position = (index - currentIndex + slides.length) % slides.length;
                const offset = position - 1; 

                return (
                  <div
                    key={index}
                    className={`card ${offset === 0 ? 'center' : ''}`}
                    style={{
                      transform: `
                        translateX(${offset * 300}px)
                        scale(${offset === 0 ? 1 : 0.8})
                        rotateY(${offset * -20}deg)
                      `,
                      zIndex: offset === 0 ? 3 : 1,
                      opacity: offset === 0 ? 1 : 0.5,
                    }}
                  >
                    <img src={slide.src} alt={slide.title} className="card-image" />
                    {offset === 0 && (
                      <div className="card-content">
                        <h3 className="card-title">{slide.title}</h3>
                        <p className="card-description">{slide.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
            <motion.button
              className="slider-button prev"
              onClick={handlePrev}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 1.2 }}
            >
              ←
            </motion.button>
            <motion.button
              className="slider-button next"
              onClick={handleNext}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInLeft}
              transition={{ delay: 1.4 }}
            >
              →
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="actual-sub-container actual-sub-container-3"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={slideInLeft}
          transition={{ delay: 1.6 }}
        >
          <motion.div
            className="sub-container-3-content"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInLeft}
            transition={{ delay: 1.8 }}
          >
            <h3 className="sub-container-3-title">Есть предложения?</h3>
            <p className="sub-container-3-subtitle">
              Каждая зарожденная идея имеет значение в поддержании экологии.
            </p>
            <button className="sub-container-3-button" onClick={() => scrollToSection('form')}>
              Свяжитесь с нами
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActualSection;