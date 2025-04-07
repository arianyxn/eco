# Структура проекта

```
eco/
├── node_modules/       # Содержит все зависимости npm-пакетов
├── public/             # Статические ресурсы, которые обслуживаются напрямую
│   ├── favicon.png
│   └── index.html      # Основной HTML-шаблон
├── src/                # Исходный код проекта
│   ├── assets/         # Ресурсы проекта, требующие обработки перед использованием
│   ├── components/     # Многоразовые UI-компоненты
│   │   ├── ActualSection
│   │   ├── ConclusionSection
│   │   ├── FaqSection
│   │   ├── FooterSection
│   │   ├── FormSection
│   │   ├── Header
│   │   ├── HeroSection
│   │   ├── MissionSection
│   │   ├── ProblemSection
│   │   ├── ResearchSection
│   │   └── StatisticsSection
│   ├── utils/          # Вспомогательные функции и утилиты
│   ├── App.css         # Основные стили приложения
│   ├── App.jsx         # Основной компонент приложения
│   ├── index.css       # Глобальные стили
│   └── index.jsx       # Точка входа React-приложения
├── package.json        # Метаданные проекта и список зависимостей
```