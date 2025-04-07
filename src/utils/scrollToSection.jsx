const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 92;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - headerHeight,
        behavior: 'smooth',
      });
    } else {
      console.log(`Секция с id "${sectionId}" не найдена`);
    }
  };
  
  export default scrollToSection;