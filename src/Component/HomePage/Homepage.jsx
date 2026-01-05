import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skill/Skills';
import Education from '../Education/Educatin';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Homepage = () => {
    return (
        <div>
              <Navbar></Navbar>
            
            <div className='bg-gradient-to-br from-black via-blue-900 to-blue-700'>
              
                <hr />
            <Banner/>
            <About/>
            <Skills/>
            <Education></Education>
            <Projects/>
            <Contact/>
            </div>
            <Footer/>
         
        </div>
    );
};

export default Homepage;