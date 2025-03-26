import React from 'react';
import './StatisticSection.css';
import statisticBackground from '../../assets/StatisticSection.jpg'; // Импортируем фоновое изображение
import cubIcon from '../../assets/cub.png'; // Импортируем изображение cub.png
import statisticImage1 from '../../assets/statistic1.png'; // Импортируем изображение statistic1.png
import statisticImage2 from '../../assets/statistic2.png'; // Импортируем изображение statistic2.png
import statisticImage3 from '../../assets/statistic3.png'; // Импортируем изображение statistic3.png

const StatisticSection = () => {
  return (
    <section className="statistic-section" style={{ backgroundImage: `url(${statisticBackground})` }}>
      <div className="statistic-container">
        <div className="sub-container sub-container-1">
          <div className="sub-container-left">
            <div className="title-wrapper">
              <img src={cubIcon} alt="Cub Icon" className="cub-icon" />
              <h3 className="statistics-title">Статистики</h3>
            </div>
            <h2 className="statistic-title">Загрязнение воздуха: PM2.5 и здоровье</h2>
            <ul className="statistic-points">
              <li>К 2025 году более 90% городского населения в странах Азии и Африки будет подвержено уровням PM2.5, превышающим нормы ВОЗ.</li>
              <li>В Индии и Китае уровень PM2.5 в крупных городах может достигать 150-200 мкг/м³ (при норме 25 мкг/м³).</li>
            </ul>
            <p className="statistic-problem">
              Проблема: Увеличение случаев заболеваний дыхательных путей и сердечно-сосудистых заболеваний.
            </p>
            <div className="more-info">
              <span>Узнать больше</span>
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="sub-container-right">
            <img src={statisticImage1} alt="Statistic Image 1" className="statistic-image" />
          </div>
        </div>
        <div className="sub-container sub-container-2">
          <div className="sub-container-left-2">
            <img src={statisticImage2} alt="Statistic Image 2" className="statistic-image" />
          </div>
          <div className="sub-container-right-2">
            <div className="title-wrapper">
              <img src={cubIcon} alt="Cub Icon" className="cub-icon" />
              <h3 className="statistics-title">Статистики</h3>
            </div>
            <h2 className="statistic-title-2">Потеря биоразнообразия: вырубка лесов</h2>
            <ul className="statistic-points-2">
              <li>К 2025 году в Амазонии может быть потеряно еще 5-10% лесов из-за вырубки и пожаров.</li>
              <li>В Индонезии и Малайзии ежегодно исчезает до 2 млн гектаров тропических лесов.</li>
            </ul>
            <p className="statistic-problem-2">
              Проблема: Исчезновение уникальных видов животных и растений, нарушение экосистем.
            </p>
            <div className="more-info">
              <span>Узнать больше</span>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
        <div className="sub-container sub-container-3">
          <div className="sub-container-left-3">
            <div className="title-wrapper">
              <img src={cubIcon} alt="Cub Icon" className="cub-icon" />
              <h3 className="statistics-title">Статистики</h3>
            </div>
            <h2 className="statistic-title-3">Изменение климата: повышение уровня моря</h2>
            <ul className="statistic-points-3">
              <li>К 2025 году уровень моря может подняться на 3-5 см, что угрожает островным государствам (Мальдивы, Тувалу).</li>
              <li>Более 50% населения прибрежных зон столкнутся с риском наводнений.</li>
            </ul>
            <p className="statistic-problem-3">
              Проблема: Потеря территорий, миграция населения, разрушение инфраструктуры.
            </p>
            <div className="more-info">
              <span>Узнать больше</span>
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="sub-container-right-3">
            <img src={statisticImage3} alt="Statistic Image 3" className="statistic-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;