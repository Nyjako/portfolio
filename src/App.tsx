import React from 'react';
import {useState} from 'react';
import {MdDarkMode, MdLightMode} from 'react-icons/md';
import {Parallax, ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const [dark_theme, set_dark_theme] = useState(true);

  const changeTheme = () => {
    set_dark_theme(!dark_theme)
  };


  return (
    <div className={dark_theme ? 'dark' : ''}>
      <div className='absolute top-0 left-0 w-screen h-screen bg-gray-300 dark:bg-slate-800'/>
      <div className='absolute top-0 left-0 w-16 h-screen bg-gray-400 !shadow-lg dark:bg-slate-900'>
        
      </div>

      <div id='content' className='content'>
        <ParallaxProvider>
          <Parallax speed={-10}>
            <div className='h-screen flex items-center'>
              <h1 className='text-8xl mx-10 w-fit'>
                Kacper Tucholski
                <h2 className='text-4xl opacity-70 mt-3 text-center'>
                  Web developer from Poland
                </h2>
              </h1>
            </div>
          </Parallax>
          <Parallax speed={5}>
            <div className='h-screen flex items-center'>
              <h1 className='text-8xl mx-10 w-fit'>
                Kacper Tucholski
                <h2 className='text-4xl opacity-70 mt-3 text-center'>
                  Web developer from Poland
                </h2>
              </h1>
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>

      <div className='dark/light-switch' onClick={changeTheme}>
        { dark_theme ? 
          <MdLightMode className='text-2xl text-center w-full'/>
        : 
          <MdDarkMode className='text-2xl text-center w-full'/>
        }
      </div>
    </div>
  );
}

export default App;
