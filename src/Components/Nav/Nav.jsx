import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MobileNav from './MobileNav';

const Nav = () => {
    
    
    return (
        <nav className=' flex relative bg-slate-100 md:flex-row h-16 items-center md:justify-between justify-start gap-5 md:px-10'>

            <div className='grow font-bold md:text-3xl p-2  md:mt-0 text-2xl'><Link to='/'>WorkHub</Link></div>
            <ul className='md:flex flex-row gap-5 hidden font-bold  text-[#757575] '>

                <li className='hover:text-[#7E90FE]'>
                    <NavLink to='/'  className={({isActive})=> (isActive? 'text-blue-500' : '')}  >
                        Home
                    </NavLink>
                </li>

                <li className='hover:text-[#7E90FE]'>
                    <NavLink to='/statistics' className={({isActive})=> (isActive? 'text-blue-500' : '')} >
                        Statistics
                    </NavLink>
                </li>

                <li  className='hover:text-[#7E90FE]'>
                    <NavLink to='/appliedJobs' className={({isActive})=> (isActive? 'text-blue-500' : '')} >
                        Applied Jobs
                    </NavLink>
                </li>

                <li  className='hover:text-[#7E90FE]'>
                    <NavLink to='/blog'  className={({isActive})=> (isActive? 'text-blue-500' : '')}>
                        Blog
                    </NavLink>
                </li>
            </ul>
            <div className='my-btn hidden md:inline'>
               <Link to='/'> <button className='title-text'>Star Applying</button></Link>
            </div>

            <MobileNav></MobileNav>

        </nav>
    );
};

export default Nav;