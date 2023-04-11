import React from 'react';
import { useNavigate } from 'react-router-dom';

const ApplideJob = ({ job }) => {
    const navigate = useNavigate()
    const { id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = job
   
    return (
        <div className='flex flex-col md:flex-row gap-10 border-2  border-slate-400 p-5 rounded-md'>
            <div className='bg-[#F4F4F4] rounded-md mx-auto w-48 h-48 flex justify-center items-center' >
                <img className='w-[100px]' src={company_logo} alt="" />
            </div>

            <div className='grow p-3 text-center md:text-start'>
                <div>
                    <h4 className='text-lg  font-bold'>{job_title}</h4>
                    <p className='font-semibold'>{company_name}</p>
                </div>
                <div className='flex justify-between md:justify-normal gap-3 my-5'>
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

            </div>

            <div className='flex items-center justify-center'>

                <button onClick={() => navigate(`/job/${id}`)} className='my-btn'>View Details</button>

            </div>
        </div>
    );
};

export default ApplideJob;