import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/Image/726056.png'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); // close mobile menu
  };

  return (
    <header className="bg-[#1dd1a1] text-black sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
      <img className='w-[80px] h-[30px]' src={logo} alt="" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <button onClick={() => handleScroll('home')} className="hover:text-red-500">Home</button>
          <button onClick={() => handleScroll('about')} className="hover:text-red-500">About Me</button>
          <button onClick={() => handleScroll('skills')} className="hover:text-red-500">Skills</button>
          <button onClick={() => handleScroll('projects')} className="hover:text-red-500">Projects</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-red-500">Contact</button>
        </nav>

        {/* Social Icons */}
       <div className="hidden md:flex space-x-3">
  <a href="https://github.com/RehenaBegum109" target="_blank" rel="noreferrer">
    <FaGithub className="w-5 h-5 hover:text-red-500" />
  </a>

  <a href="https://www.linkedin.com/in/rehena-begum-057894396" target="_blank" rel="noreferrer">
    <FaLinkedin className="w-5 h-5 hover:text-red-500" />
  </a>
</div>


        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1dd1a1] px-6 py-4 space-y-2">
          <button onClick={() => handleScroll('home')} className="block py-2 w-full text-left hover:text-red-500">Home</button>
          <button onClick={() => handleScroll('about')} className="block py-2 w-full text-left hover:text-red-500">About Me</button>
          <button onClick={() => handleScroll('skills')} className="block py-2 w-full text-left hover:text-red-500">Skills</button>
          <button onClick={() => handleScroll('projects')} className="block py-2 w-full text-left hover:text-red-500">Projects</button>
          <button onClick={() => handleScroll('contact')} className="block py-2 w-full text-left hover:text-red-500">Contact</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
