import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Homepage from '../HomePage/Homepage';


const Root = () => {
    return (
        <div className='max-w-7xl mx-auto '>
           <Homepage/>
        </div>
    );
};

export default Root;