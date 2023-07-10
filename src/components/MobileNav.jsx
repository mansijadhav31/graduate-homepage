import React, { useState, useEffect } from 'react';
import { toggleResponsiveClass } from '../functions';
import { Fade as Hamburger } from 'hamburger-react';

export function MobileNav({toggled, toggle}){
    return (
        <div>
           <div className="header-logo">
          <a href="www.google.com" className="active">
            <img
              src="https://gpem-luc-edu.cdn.technolutions.net/www/images/GPEM_Website/LUC_stacked.png"
              height="40px"
              width="auto"
              alt="Logo"
            />
          </a>
        </div>
        <div>
        <Hamburger toggled={toggled} toggle={toggle} />
        </div>
        </div>
    );
}