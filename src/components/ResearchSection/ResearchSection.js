import React from 'react';
import { motion } from 'framer-motion'; // Импортируем framer-motion
import './ResearchSection.css'; // Обновляем путь к CSS
import researchBackground from '../../assets/ResearchSection.jpg'; // Оставляем имя файла, так как ты не просила его менять
import bigStar from '../../assets/bigstar.png'; // Импортируем изображение звезды
// Импортируем изображения для карточек (замени на свои пути)
import cardImage1 from '../../assets/card-image1.jpg';
import cardImage2 from '../../assets/card-image2.jpg';
import cardImage3 from '../../assets/card-image3.jpg';
import cardImage4 from '../../assets/card-image4.jpg';

const ResearchSection = () => { // Переименовываем компонент
  // Данные для карточек
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

  // Анимация для карточек
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <section className="research-section" style={{ backgroundImage: `url(${researchBackground})` }}>
      <div className="research-container">
        <div className="title-wrapper">
          <img src={bigStar} alt="Big Star" className="big-star" />
          <h3 className="research-title">Исследования</h3>
        </div>
        <h2 className="research-title-main">Что нам известно?</h2>
        <p className="research-description">
          Для поддержания Земли и борьбы с экологическими проблемами наши исследователи всегда собирают достоверную информацию, тщательно проверяя ее перед публикацией новостей.
        </p>
        <div className="research-cards-container">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="research-card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <img src={card.image} alt={card.title} className="research-card-image" />
              <div className="research-card-content">
                <span className="research-card-category">{card.category}</span>
                <h3 className="research-card-title">{card.title}</h3>
                <p className="research-card-description">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;