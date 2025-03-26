import React, { useState, useEffect } from 'react';
import './ActualSection.css';
import actualBackground from '../../assets/ActualSection.jpg'; // Фоновое изображение секции
import cosmosIcon from '../../assets/cosmos.png'; // Иконка cosmos.png

// Импортируем 3 изображения для слайдера (замени на свои пути)
import image1 from '../../assets/slider-image1.jpg';
import image2 from '../../assets/slider-image2.jpg';
import image3 from '../../assets/slider-image3.jpg';

const ActualSection = () => {
  // Массив с 3 изображениями
  const slides = [
    { src: image1, title: 'CHAMONIX - FRANCA', description: 'Deste venue sans te torturer mes souvenirs' },
    { src: image2, title: 'PLANALTO - ESCOCIA', description: 'Another beautiful place to explore' },
    { src: image3, title: 'MONTANA - USA', description: 'Experience the wilderness' },
  ];

  // Состояние для текущего индекса центрального изображения
  const [currentIndex, setCurrentIndex] = useState(0);
  // Состояние для управления автопрокруткой
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Функция для переключения на предыдущее изображение
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    setIsAutoPlay(false); // Останавливаем автопрокрутку при ручном управлении
  };

  // Функция для переключения на следующее изображение
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    setIsAutoPlay(false); // Останавливаем автопрокрутку при ручном управлении
  };

  // Автопрокрутка с помощью useEffect
  useEffect(() => {
    if (!isAutoPlay) return; // Если автопрокрутка отключена, ничего не делаем

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Переключаем каждые 5 секунд

    // Очищаем интервал при размонтировании компонента или изменении isAutoPlay
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  return (
    <section className="actual-section" style={{ backgroundImage: `url(${actualBackground})` }}>
      <div className="actual-container">
        <div className="actual-sub-container actual-sub-container-1">
          <div className="actual-title-wrapper">
            <img src={cosmosIcon} alt="Cosmos Icon" className="cosmos-icon" />
            <h3 className="actual-title">Актуальные новости</h3>
          </div>
          <h2 className="top-title">Топ-3</h2>
          <p className="top-description">
            Три главные экологические угрозы, которые обсуждаются во всем мире и требуют срочных решений.
          </p>
        </div>
        <div className="actual-sub-container actual-sub-container-2">
          <div className="image-slider">
            <div className="cards-wrapper">
              {slides.map((slide, index) => {
                // Вычисляем позицию карточки относительно текущего индекса
                const position = (index - currentIndex + slides.length) % slides.length;
                const offset = position - 1; // Смещение: -1, 0, 1 (так как 3 карточки)

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
            </div>
            <button className="slider-button prev" onClick={handlePrev}>
              ←
            </button>
            <button className="slider-button next" onClick={handleNext}>
              →
            </button>
          </div>
        </div>
        <div className="actual-sub-container actual-sub-container-3">
          <div className="sub-container-3-content">
            <h3 className="sub-container-3-title">Есть предложения?</h3>
            <p className="sub-container-3-subtitle">
              Каждая зарожденная идея имеет значение в поддержании экологии.
            </p>
            <button className="sub-container-3-button">Свяжитесь с нами</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActualSection;