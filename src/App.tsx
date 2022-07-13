import { Skills } from './components/skills';
import React from 'react';
import {useState} from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import load_particles from './components/particles'

import { AiFillHome, AiFillInfoCircle, AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {MdDarkMode, MdLightMode} from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io';
import { GiTalk } from 'react-icons/gi'


function App() {
  const [dark_theme, set_dark_theme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  const changeTheme = () => {
    set_dark_theme(!dark_theme)
  };

  React.useEffect(() => {
    document.title = "KT"
  }, []);
 

  return (
    <div className={dark_theme ? 'dark' : ''}>
      {/* <div className='absolute top-0 left-0 w-screen h-screen bg-gray-300 dark:bg-slate-800'/> */}
      <div className='absolute top-0 left-0 w-screen h-screen bg-gray-300 dark:bg-slate-800'>
        {load_particles()}
      </div>
      <div className='sidebar pt-5 flex items-center flex-col gap-3'>
        {sidebar_button("Home", <AiFillHome/>, "#home")}
        {sidebar_button("About_me", <BsFillPersonLinesFill/>, "#about_me")}
        {sidebar_button("Skills", <FaLaptopCode/>, "#skills")}
        {sidebar_button("School", <IoMdSchool/>, "#school")}
        {sidebar_button("Contact", <GiTalk/>, "#contact")}
        {sidebar_button("Info", <AiFillInfoCircle/>, "#info")}
      </div>

      <div id='content' className='content'>
        <section id="home">
          <div className='h-screen w-full flex items-center justify-center text-center'>
            <h1 className='head_text w-fit'>
              Kacper Tucholski
              <h2 className='mid_text opacity-70 mt-3 text-center'>
                Web developer from Poland
              </h2>
            </h1>
          </div>
        </section>

        <section id="about_me">
          <div className='min-h-screen w-full flex justify-center items-center flex-col md:gap-10 gap-0'>
            <h2 className='head_text w-fit'>
              About me
            </h2>
            <div className='w-full p-10 flex md:flex-row flex-col md:gap-16 gap-5 justify-center items-center'>
              <div className='flex flex-col gap-5 md:text-2xl text-xl md:text-right text-center'>
                <p>I'm web developer from Poland. I have passion for creating something from nothing</p>
                <p>In my spare time, I like to develop my programming skills, play games and watch anime</p>
                <p>My dream is to one day make my own game</p>
              </div>
              <img src="prof.png" alt="" srcSet="" className='rounded-lg shadow-xl md:w-[256px] max-w-full aspect-square mb-32 md:mb-0' />
            </div>
          </div>
        </section>

        <section id="skills">
          <div className='min-h-screen w-full flex md:justify-center items-center flex-col md:gap-10 gap-5'>
            <h2 className='head_text h-fit text-center'>
              Skills
            </h2>
            <div className='w-full flex justify-center items-center gap-5'>
              <div className='flex w-fit h-fit tab:gap-24 gap-10 tab:flex-row flex-col'>
                <Skills/>
              </div>
            </div>
          </div>
        </section>

        <section id="school">
          <div className='min-h-screen w-full flex items-center justify-center flex-col'>
            <h2 className='head_text w-fit mb-10'>
              School
            </h2>
            <p className='mid_text text-center w-fit'>
              Państwowa Wyższa Szkoła Zawodowa w Nysie
            </p>
            <p className='sm_text w-fit opacity-70'>
              2018 - Present 
            </p>
          </div>
        </section>

        <section id="contact">
          <div className='min-h-screen w-full flex items-center justify-center flex-col md:gap-10 gap-5'>
            <h2 className='head_text w-fit'>
              Contact & Social
            </h2>
            <div className='flex gap-5 flex-col md:flex-row items-center md:items-start'>
              <a href="mailto:kacper.tucholski.kt@gmail.com">
                <button className='social_button'>
                  <AiFillMail className='text-2xl'/>
                  Get in Touch
                </button>
              </a>
              <a href="https://github.com/Nyjako" target="_blank" rel="noopener noreferrer">
                <button className='social_button'>
                  <AiFillGithub className='text-2xl'/>
                  Github
                </button>
              </a>
              <a href="https://www.linkedin.com/in/nyjako/" target="_blank" rel="noopener noreferrer">
                <button className='social_button'>
                  <AiFillLinkedin className='text-2xl'/>
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </section>
        <section id="info">
          <div className='min-h-screen w-full flex items-center justify-center flex-col md:gap-10 gap-5'>
            <h2 className='head_text w-fit'>
              Info
            </h2>
            <div className='flex flex-col text-center'>
              <p className='text-xl'>
                Created using <a className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                  href='https://reactjs.org' target="_blank" rel="noopener noreferrer">
                  React
                </a>
              </p>
              <p className='text-xl'>
                Icons <a className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                  href='https://react-icons.github.io/react-icons' target="_blank" rel="noopener noreferrer">
                  React-icons
                </a>
              </p>
              <p className='text-xl'>
                Style <a className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                  href='https://tailwindcss.com' target="_blank" rel="noopener noreferrer">
                  TailwindCSS
                </a>
              </p>
              <p className='text-xl'>
                Background <a className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                  href='https://www.npmjs.com/package/react-tsparticles' target="_blank" rel="noopener noreferrer">
                  react-tsparticles
                </a>
              </p>
              <p className='text-xl'>
                <a className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                  href='https://github.com/Nyjako/portfolio' target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              </p>
            </div>
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