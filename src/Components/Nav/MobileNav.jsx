import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>

            <div className='lg:hidden'>

                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3BottomRightIcon className='w-5 text-gray-600 mr-2' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10'>
                        <div className='p-5 bg-white border rounded shadow-sm'>

                            <div className='flex items-center justify-between mb-4'>
                                <div>
                                    <Link to='/' className='inline-flex items-center'>

                                        <span className='  font-bold  text-2xl'>
                                            WorkHub
                                        </span>
                                    </Link>
                                </div>

                                <div>
                                    <button
                                        aria-label='Close Menu'
                                        title='Close Menu'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <XMarkIcon className='w-5 text-gray-600' />
                                    </button>
                                </div>
                            </div>

                            <nav>
                                <ul className='font-bold space-y-4  text-[#757575]'>
                                    <li className='hover:text-[#7E90FE]'>
                                        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-500' : '')}  >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className='hover:text-[#7E90FE]'>
                                        <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'text-blue-500' : '')} >
                                            Statistics
                                        </NavLink>
                                    </li>
                                    <li className='hover:text-[#7E90FE]'>
                                        <NavLink to='/appliedJobs' className={({ isActive }) => (isActive ? 'text-blue-500' : '')} >
                                            Applied Jobs
                                        </NavLink>
                                    </li>
                                    <li className='hover:text-[#7E90FE]'>
                                        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
                                            Blog
                                        </NavLink>
                                    </li>
                                    <div className='my-btn w-[150px] text-center'>
                                        <Link to="/"><button className='title-text'>Star Applying</button></Link>
                                    </div>
                                </ul>

                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MobileNav;