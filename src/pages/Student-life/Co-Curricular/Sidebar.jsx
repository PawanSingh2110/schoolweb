import React, { useEffect, useState } from 'react';

const Sidebar = () => {
  const [isSticky, setIsSticky] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      const sidebar = document.querySelector('.sidebar');
      const footerRect = footer.getBoundingClientRect();
      const sidebarHeight = sidebar.offsetHeight;

      
      if (footerRect.top <= window.innerHeight + sidebarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id "${id}" not found`);
    }
  };

  return (
    <div className={`sidebar ${isSticky ? 'sticky' : ''}`}>
       <div className="tab" onClick={() => scrollToSection('coCurricular')}>
        Co-Curricular
      </div>
      <div className="tab" onClick={() => scrollToSection('clubActivities')}>
        Club Activities
      </div>
    </div>
  );
};

export default Sidebar;