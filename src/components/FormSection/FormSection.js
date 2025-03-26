import React from 'react';
import './FormSection.css';
import formBackground from '../../assets/FormSection.jpg'; // Фон секции

const FormSection = () => {
  return (
    <section className="form-section" style={{ backgroundImage: `url(${formBackground})` }}>
      <div className="form-main-container">
        <h2 className="form-heading-title">Будьте в курсе экологических новостей</h2>
        <div className="form-content-wrapper">
          <div className="form-subheading">
            <p>
              Ecocycle — это место, где информация о состоянии экологии становится доступной каждому. Мы собираем и анализируем данные, чтобы помочь вам принимать обоснованные решения и активно участвовать в улучшении нашей планеты. Присоединяйтесь к сообществу, делитесь идеями и станьте частью глобальных усилий по решению экологических проблем.
            </p>
          </div>
          <div className="form-input-section">
            <form className="form-input-form">
              <input type="text" placeholder="Имя" className="form-input" required />
              <input type="email" placeholder="Email" className="form-input" required />
              <input type="text" placeholder="Локация" className="form-input" required />
              <button type="submit" className="form-submit-button">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;