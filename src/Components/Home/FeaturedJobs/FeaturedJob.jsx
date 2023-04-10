import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedJob = ({ job }) => {
    const navigate = useNavigate()
    const { id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = job
    return (
        <>


            <div className=' w-auto md:w-[650px] rounded-lg border border-slate-200 p-10 '>
                <div className='mb-3'>
                    <img className='w-[100px]' src={company_logo} alt="" />
                </div>
                <div>
                    <h4 className='text-lg  font-bold'>{job_title}</h4>
                    <p className='font-semibold'>{company_name}</p>
                </div>
                <div className='flex gap-3 my-5'>
                    <button className='my-btn-secondary '>{remote_or_onsite}</button>
                    <button className='my-btn-secondary'>{fulltime_or_parttime}</button>
                </div>
                <div className='font-semibold md:flex mb-5 '>
                    <div className='flex mb-5 md:mb-0'>
                        <img src="https://i.ibb.co/Y3Hc7Z7/Frame-4.png" alt="" />
                        <p >{location}</p>
                    </div>
                    <div className='flex'>
                        <img className='md:ml-5 ' src="https://i.ibb.co/7vW76Nx/Frame.png" alt="" />
                        <p>salary: {salary}</p>
                    </div>
                </div>
                <div >

                    <button onClick={() => navigate(`/job/${id}`)} className='my-btn'>View Details</button>


                </div>
            </div>

        </>
    );
};

export default FeaturedJob;