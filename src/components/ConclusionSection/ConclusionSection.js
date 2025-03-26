import React from 'react';
import './ConclusionSection.css';
import conclusionBackground from '../../assets/ConclutionSection.jpg'; // Фоновое изображение секции
import bigStarIcon from '../../assets/bigstar.png'; // Иконка bigstar.png

// Импортируем иконки для списка (замени на свои пути)
import infoIcon from '../../assets/info-icon.png'; // Иконка для "Актуальные экологические инфо"
import futureIcon from '../../assets/future-icon.png'; // Иконка для "Сотрудничество для устойчивого будущего"
import educationIcon from '../../assets/education-icon.png'; // Иконка для "Образование и осведомленность"
import solutionIcon from '../../assets/solution-icon.png'; // Иконка для "Реальные решения"
import interactionIcon from '../../assets/interaction-icon.png'; // Иконка для "Просто взаимодействия"

const ConclusionSection = () => {
  // Массив с текстами и иконками
  const benefits = [
    { text: 'Актуальные экологические инфо', icon: infoIcon },
    { text: 'Сотрудничество для устойчивого будущего', icon: futureIcon },
    { text: 'Образование и осведомленность', icon: educationIcon },
    { text: 'Реальные решения', icon: solutionIcon },
    { text: 'Просто взаимодействия', icon: interactionIcon },
  ];

  return (
    <section className="conclusion-section" style={{ backgroundImage: `url(${conclusionBackground})` }}>
      <div className="conclusion-main-container">
        <div className="conclusion-subcontainer conclusion-subcontainer-1">
          <div className="conclusion-header-wrapper">
            <img src={bigStarIcon} alt="Big Star Icon" className="conclusion-star-icon" />
            <h3 className="conclusion-header-title">Ключевые выводы</h3>
          </div>
          <h2 className="conclusion-subcontainer-1-title">
            Внесите свой вклад в экологию с Ecocycle
          </h2>
          <p className="conclusion-subcontainer-1-subtitle">
            Присоединяйтесь к Ecocycle — экологической информационной платформе, где каждый может внести свой вклад в решение глобальных экологических проблем, используя актуальные данные и предложенные решения.
          </p>
          <button className="conclusion-subcontainer-1-button">
            Приступить
            <span className="conclusion-button-arrow">→</span>
          </button>
        </div>
        <div className="conclusion-subcontainer conclusion-subcontainer-2">
          <div className="conclusion-benefits-wrapper">
            <div className="conclusion-benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="conclusion-benefit-item">
                  <span className="conclusion-benefit-text">{benefit.text}</span>
                  <img src={benefit.icon} alt="Benefit Icon" className="conclusion-benefit-icon" />
                </div>
              ))}
              {/* Дублируем элементы для бесконечного цикла */}
              {benefits.map((benefit, index) => (
                <div key={`duplicate-${index}`} className="conclusion-benefit-item">
                  <span className="conclusion-benefit-text">{benefit.text}</span>
                  <img src={benefit.icon} alt="Benefit Icon" className="conclusion-benefit-icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;