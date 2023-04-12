import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className=' flex flex-col md:flex-row h-16 items-center justify-between gap-5 md:px-10'>

            <div className='grow font-bold md:text-3xl mt-3 md:mt-0 text-2xl'>WorkHub</div>
            <ul className='flex flex-row gap-5 font-bold  text-[#757575] '>

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

                <li  className='hover:text-[#7E90FE]' >
                    <NavLink to='/blog' className={({isActive})=> (isActive? 'text-blue-500' : '')} >
                        Blog
                    </NavLink>
                </li>
            </ul>
            <div className='my-btn'>
                <button className='title-text'>Star Applying</button>
            </div>

        </nav>
    );
};

export default Nav;