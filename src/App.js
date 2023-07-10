import './App.css';
import React, { useState, useEffect } from 'react';
import { toggleResponsiveClass } from './functions';
import { Fade as Hamburger } from 'hamburger-react';
import DesktopNav from './components/DesktopNav';
import { MobileNav } from './components/MobileNav';
import LetterPage from './components/LetterPage';

function App() {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }; 
  }, []);

  return (
    <div className="App">
      <div  id="myTopnav">

        <div className='justify-right'>
          {isResponsive ? (
            <MobileNav toggled={false} toggle={toggleResponsiveClass} />
           
          ) : (
            <DesktopNav/>
          )}
        </div>
      </div>
      <LetterPage/>
    </div>
  );
}

export default App;

