import React, { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';

export function MobileNav() {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div className="flex justify-between items-center mobile-header-wrapper">
      <div className="mobile-header-logo">
        <a href="www.google.com" className="active">
          <img
            src="https://gpem-luc-edu.cdn.technolutions.net/www/images/GPEM_Website/LUC_stacked.png"
            height="20px"
            width="auto"
            alt="Logo"
          />
        </a>
      </div>
      <div>
        <Hamburger toggled={isToggled} toggle={handleToggle} />
      </div>
    </div>
  );
}