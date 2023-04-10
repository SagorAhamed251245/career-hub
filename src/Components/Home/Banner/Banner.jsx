import React from 'react';

const Banner = () => {
    return (
        <section className='my-container  md:flex  md:flex-row  items-center justify-between'>
            <div className='md:w-1/2'>
                <h1 className='text-5xl   md:w-3/5 font-bold leading-normal'>
                    One Step Away  from your <span className='gradient-text'> Dream Jobs</span>
                </h1>
                <p className='my-5 md:w-3/4'>
                A wealth of job opportunities is at your fingertips with all the crucial information you need. Your future is wide open. Explore it. Organize all your job applications from inception to completion effortlessly.
                </p>
                <button className='my-btn'>
                    Get Started
                </button>
            </div>

            <div className='md:w-1/2'>
                <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
            </div>
        </section>
    );
};

export default Banner;