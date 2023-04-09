import React from 'react';

const Banner = () => {
    return (
        <section className='my-container  md:flex  md:flex-row  items-center justify-between'>
            <div className='md:w-1/2'>
                <h1 className='text-5xl   md:w-3/5 font-bold'>
                    One Step Away  from your <span className='gradient-text'> Dream Jobs</span>
                </h1>
                <p className='my-5 md:w-3/4'>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
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