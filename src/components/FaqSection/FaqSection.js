import React, { useState } from 'react';
import './FaqSection.css';
import { motion, AnimatePresence } from 'framer-motion'; // Импортируем framer-motion
import faqBackground from '../../assets/FaqSection.jpg'; // Фон секции
import faqIcon from '../../assets/faq.png'; // Иконка faq.png

const FaqSection = () => {
  // Состояние для управления открытием/закрытием вопросов
  const [openIndex, setOpenIndex] = useState(0); // Первый вопрос открыт по умолчанию

  // Данные для FAQ
  const faqItems = [
    {
      question: 'Что я могу сделать, чтобы помочь экологии?',
      answer:
        'Сократите использование пластика, переходите на reusable альтернативы, экономьте энергию и поддерживайте экологические инициативы.',
    },
    {
      question: 'Почему повышение уровня моря — это проблема?',
      answer:
        'Повышение уровня моря приводит к затоплению прибрежных территорий, утрате экосистем и угрозе для жизни миллионов людей.',
    },
    {
      question: 'Что такое углеродный след и как его уменьшить?',
      answer:
        'Углеродный след — это объем выбросов CO2, связанных с вашей деятельностью. Уменьшить его можно, используя общественный транспорт, сокращая потребление мяса и экономя энергию.',
    },
    {
      question: 'Что такое zero waste lifestyle?',
      answer:
        'Zero waste lifestyle — это образ жизни, направленный на минимизацию отходов через повторное использование, переработку и осознанное потребление.',
    },
  ];

  // Функция для переключения состояния вопроса
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Закрываем, если уже открыт, или открываем новый
  };

  return (
    <section className="faq-section" style={{ backgroundImage: `url(${faqBackground})` }}>
      <div className="faq-main-container">
        <div className="faq-heading">
          <div className="faq-title-wrapper">
            <img src={faqIcon} alt="FAQ Icon" className="faq-icon" />
            <span className="faq-title">FAQ'S</span>
          </div>
          <h2 className="faq-heading-title">Часто задаваемые вопросы</h2>
          <p className="faq-heading-subtitle">
            Мы здесь, чтобы помочь вам принять правильное решение. Изучите наши часто задаваемые вопросы и найдите ответы ниже.
          </p>
        </div>
        <div className="faq-content-section">
          <div className="faq-questions-container">
            <div className="faq-items">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${openIndex === index ? 'open' : ''}`}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h3 className="faq-question-text">{item.question}</h3>
                    <span className="faq-toggle-icon">
                      {openIndex === index ? '×' : '+'}
                    </span>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;