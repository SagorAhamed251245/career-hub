import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className=' flex flex-col md:flex-row h-16 items-center justify-between gap-5 md:px-10'>

            <div className='grow font-bold md:text-3xl mt-3 md:mt-0 text-2xl'>WorkHub</div>
            <div className='flex flex-row gap-5 font-bold  text-[#757575] '>
        
                <Link to='/' className='hover:text-[#7E90FE]'>
                    Home
                </Link>

                <Link to='/statistics' className='hover:text-[#7E90FE]'>
                    Statistics
                </Link>

                <Link to='/appliedJobs' className='hover:text-[#7E90FE]'>
                    Applied Jobs
                </Link>

                <Link to='/blog' className='hover:text-[#7E90FE]'>
                    Blog
                </Link>
            </div>
            <div className='my-btn'>
                <button className='title-text'>Star Applying</button>
            </div>

        </nav>
    );
};

export default Nav;