import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Импортируем framer-motion
import './ProblemSection.css';
import problemBackground from '../../assets/ProblemSection.jpg'; // Импортируем фоновое изображение
import cleverIcon from '../../assets/clever.png'; // Импортируем изображение clever.png

const ProblemSection = () => {
  // Данные для карточек (6 проблем с подпунктами)
  const problems = [
    {
      title: 'Загрязнение воздуха',
      points: [
        'Пекин, Китай: Высокий уровень PM2.5(мелкая пыль, которая вредит здоровью), частые смоги.',
        'Дели, Индия: Рекордные показатели загрязнения, влияющие на здоровье.',
        'Карачи, Пакистан: Промышленные выбросы и транспортные загрязнения.',
      ],
    },
    {
      title: 'Глобальное потепление',
      points: [
        'Гренландия и Антарктида: Ускоренное таяние ледников, с 1992 года потеряно более 6,4 трлн тонн льда (NASA, 2020).',
        'Европа: 2023 год стал самым жарким в истории наблюдений, средняя температура была на 1,48°C выше доиндустриального уровня (Copernicus, 2024).',
        'США, Калифорния: Увеличение лесных пожаров, в 2020 году сгорело около 1,7 млн гектаров леса, что в 5 раз больше среднего уровня (NOAA).',
      ],
    },
    {
      title: 'Пластиковые отходы',
      points: [
        'Тихий океан: "Великий тихоокеанский мусорный остров" занимает 1,6 млн км², что в три раза больше Франции (Ocean Cleanup, 2023).',
        'Индонезия: Более 50% реки Читарум покрыто пластиковыми отходами, вода токсична (World Bank, 2022).',
        'Европа: Только 9% пластика перерабатывается, остальное сжигается или попадает в природу (European Environment Agency, 2023).',
      ],
    },
    {
      title: 'Истощение лесов',
      points: [
        'Бразилия, Амазония: В 2023 году вырубка леса достигла 5000 км² только за первые шесть месяцев (INPE, 2023).',
        'Демократическая Республика Конго: Второй крупнейший дождевой лес теряет 0,5 млн гектаров ежегодно из-за нелегальной вырубки (WWF, 2022).',
        'Россия: В 2021 году страна потеряла 6,5 млн гектаров леса из-за пожаров и вырубки (Global Forest Watch, 2022).',
      ],
    },
    {
      title: 'Загрязнение вод',
      points: [
        'Ганг, Индия: Содержит 120 раз больше фекальных бактерий, чем допустимо (Central Pollution Control Board, 2023).',
        'Филиппины: Река Пасиг — одна из самых загрязненных в мире, ежегодно в океан попадает 63 тыс. тонн пластика (UNEP, 2023).',
        'Мексиканский залив: "Мертвая зона" из-за химических удобрений занимает 17 000 км², убивая морскую жизнь (NOAA, 2022).',
      ],
    },
    {
      title: 'Утрата биоразнообразия',
      points: [
        'Австралия: С 1788 года исчезло 34 вида млекопитающих, самый высокий уровень потерь среди континентов (Australian Wildlife Conservancy, 2023).',
        'Мадагаскар: 90% лесов уничтожено, под угрозой вымирания более 80% эндемичных видов (IUCN, 2023).',
        'Коралловые рифы: 50% рифов погибло за последние 30 лет из-за потепления океана и кислотности воды (IPCC, 2023).',
      ],
    },
  ];

  // Состояние для текущей карточки
  const [currentIndex, setCurrentIndex] = useState(0);

  // Функции для переключения карточек
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % problems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + problems.length) % problems.length);
  };

  // Анимация для карточек
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <section className="problem-section" style={{ backgroundImage: `url(${problemBackground})` }}>
      <div className="problem-container">
        <div className="title-wrapper">
          <img src={cleverIcon} alt="Clever Icon" className="clever-icon" />
          <h3 className="problems-title">Проблемы</h3>
        </div>
        <h2 className="problem-title">Масштабные проблемы</h2>
        <p className="problem-description">
          Важно помнить, что проблемы экологии — это не только проблемы отдельных стран, но и мировой вызов, который требует коллективных усилий для сокращения загрязнения, сохранения природы и борьбы с последствиями изменения климата.
        </p>
        <div className="problems-container">
          <button className="arrow-button arrow-up" onClick={handlePrev}>
            ↑
          </button>
          <div className="problem-card-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="problem-card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="problem-card-inner">
                  <h3 className="problem-card-title">{problems[currentIndex].title}</h3>
                  <ul className="problem-card-points">
                    {problems[currentIndex].points.map((point, index) => {
                      const [location, description] = point.split(': '); // Разделяем строку на две части по двоеточию
                      return (
                        <li key={index}>
                          <span className="location-highlight">{location}:</span> {description}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="more-info">
                    <span>Подробнее</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button className="arrow-button arrow-down" onClick={handleNext}>
            ↓
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;