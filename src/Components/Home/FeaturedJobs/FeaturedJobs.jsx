import React from 'react';

const FeaturedJobs = () => {
    return (
        <section className='my-container'>
            <div className='text-center'>
                <h2 className='my-h2 '>
                Featured Jobs
                </h2>
                <p>
                Endless job prospects await you with all the relevant information you need. The future is yours. Claim it. 
                </p>
            </div>

            <div className='md:flex flex-wrap justify-between mt-10 '>
                <div className=' w-auto md:w-[650px] rounded-lg border border-slate-200 p-10 '>
                    <div className='mb-3'>
                        <img className='w-[100px]' src="https://i.ibb.co/CbFmJgj/google-1-1-1.png" alt="" />
                    </div>
                    <div>
                        <h4 className='text-base  font-bold'>Software Engineer</h4>
                        <p className='font-semibold'>Google LLC</p>
                    </div>
                    <div className='flex gap-3 my-5'>
                        <button className='my-btn-secondary '>Remote</button>
                        <button className='my-btn-secondary'>Full-time</button>
                    </div>
                    <div className='font-semibold flex mb-5 '>
                        <img src="https://i.ibb.co/Y3Hc7Z7/Frame-4.png" alt="" />
                        <p >New York, NY</p>
                        <img className='ml-5 ' src="https://i.ibb.co/7vW76Nx/Frame.png" alt="" />
                        <p>salary: $100,000 - $120,000</p>
                    </div>
                    <div >
                        <button className='my-btn'>View Details</button>
                    </div>
                </div>
                <div className='w-auto md:w-[650px] bg-red-400 '>
                    <h1>h1</h1>
                </div>
                
            </div>
        </section>
    );
};

export default FeaturedJobs;