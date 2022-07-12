import React from 'react';
import {useState} from 'react';
import {MdDarkMode, MdLightMode} from 'react-icons/md';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { IoMdSchool } from 'react-icons/io';
import ScrollIntoView from 'react-scroll-into-view'

function App() {
  const [dark_theme, set_dark_theme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  const changeTheme = () => {
    set_dark_theme(!dark_theme)
  };

  return (
    <div className={dark_theme ? 'dark' : ''}>
      <div className='absolute top-0 left-0 w-screen h-screen bg-gray-300 dark:bg-slate-800'/>
      <div className='sidebar pt-5 flex items-center flex-col gap-3'>
        {sidebar_button("Home", <AiFillHome/>, "#home")}
        {sidebar_button("Info", <AiFillInfoCircle/>, "#info")}
        {sidebar_button("School", <IoMdSchool/>, "#school")}
      </div>

      <div id='content' className='content'>
        <section id="home">
          <div className='h-screen w-full flex items-center justify-center'>
            <h1 className='text-8xl w-fit'>
              Kacper Tucholski
              <h2 className='text-4xl opacity-70 mt-3 text-center'>
                Web developer from Poland
              </h2>
            </h1>
          </div>
        </section>

        <section id="info">
          <div className='h-screen w-full flex items-center justify-center'>
            <h1 className='text-8xl w-fit'>
              Kacper Tucholski
              <h2 className='text-4xl opacity-70 mt-3 text-center'>
                Web developer from Poland
              </h2>
            </h1>
          </div>
        </section>

        <section id="school">
          <div className='h-screen w-full flex items-center justify-center'>
            <h1 className='text-8xl w-fit'>
              Kacper Tucholski
              <h2 className='text-4xl opacity-70 mt-3 text-center'>
                Web developer from Poland
              </h2>
            </h1>
          </div>
        </section>
      </div>

      <div className='dark/light-switch group' onClick={changeTheme}>
        { dark_theme ? 
          <MdLightMode className='text-2xl text-center w-full'/>
        : 
          <MdDarkMode className='text-2xl text-center w-full'/>
        }
      </div>
    </div>
  );

  function sidebar_button(name: string, icon: JSX.Element, scroll_selector: string) {
    return (
      <ScrollIntoView selector={scroll_selector} className='sidebar_button hover:cursor-pointer hover:border-l-4 group'>
        <div className='sidebar_button_icon'>
          {icon}
        </div>
        <div className='relative left-4 w-0 flex'>
          <p className='tooltip'>{name}</p>
        </div>
      </ScrollIntoView>
    );
  }
}

export default App;
