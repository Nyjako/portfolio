import React from 'react';
import {useState} from 'react';
import {MdDarkMode, MdLightMode} from 'react-icons/md';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { IoMdSchool } from 'react-icons/io';

function App() {
  const [dark_theme, set_dark_theme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  const changeTheme = () => {
    set_dark_theme(!dark_theme)
  };


  return (
    <div className={dark_theme ? 'dark' : ''}>
      <div className='absolute top-0 left-0 w-screen h-screen bg-gray-300 dark:bg-slate-800'/>
      <div className='sidebar pt-5 flex items-center flex-col gap-3'>
        <div className='w-full h-11 hover:border-l-4 flex justify-center items-center transition-all hover:cursor-pointer'>
          <div className='text-2xl w-11 h-11 text-center rounded-[100%] hover:rounded-md dark:bg-slate-600 bg-slate-300 flex justify-center items-center transition-all'>
            <AiFillHome/>
          </div>
        </div>
        <div className='w-full h-11 hover:border-l-4 flex justify-center items-center transition-all  hover:cursor-pointer'>
          <div className='text-2xl w-11 h-11 text-center rounded-[100%] hover:rounded-md dark:bg-slate-600 bg-slate-300 flex justify-center items-center transition-all'>
            <AiFillInfoCircle/>
          </div>
        </div>
        <div className='w-full h-11 hover:border-l-4 flex justify-center items-center transition-all  hover:cursor-pointer'>
          <div className='text-2xl w-11 h-11 text-center rounded-[100%] hover:rounded-md dark:bg-slate-600 bg-slate-300 flex justify-center items-center transition-all'>
            <IoMdSchool/>
          </div>
        </div>

      </div>

      <div id='content' className='content'>
        <div className='h-screen w-full flex items-center justify-center'>
          <h1 className='text-8xl w-fit'>
            Kacper Tucholski
            <h2 className='text-4xl opacity-70 mt-3 text-center'>
              Web developer from Poland
            </h2>
          </h1>
        </div>
        <div className='h-screen w-full flex items-center justify-center'>
          <h1 className='text-8xl w-fit'>
            Kacper Tucholski
            <h2 className='text-4xl opacity-70 mt-3 text-center'>
              Web developer from Poland
            </h2>
          </h1>
        </div>
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
