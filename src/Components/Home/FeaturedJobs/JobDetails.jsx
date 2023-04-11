import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb } from '../../../utils/fakedb';


const JobDetails = () => {
    const dynamic = useParams()

    const [jobs, setJob] = useState([])
    const {
        id,
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        salary,
        job_title,
        contact_information,
        location



    } = jobs



    useEffect(() => {
        fetch('/JobFeatured.json')

            .then(res => res.json())
            .then(data => setJob(data))

    }, [])

    if (jobs.length > 0) {

        const myJob = jobs.filter(job => job.id == dynamic.id);
        setJob(...myJob)

    }

  

    return (
        <>
            <div className='text-3xl font-bold text-center mt-16 p-16 mb-[150px]'>
                <h3 >Job Details</h3>
            </div>

            <section className='my-container md:flex gap-5 '>

                <div className='md:w-[70%] '>
                    <p className='my-title'>
                        <span className='my-span-title'>Job Description:</span>   {job_description}
                    </p>
                    <p className='my-title'>
                        <span className='my-span-title'>Job Responsibility:</span>   {job_responsibility}
                    </p>
                    <p className='my-title'>
                        <span className='my-span-title'>Educational Requirements:</span> <br />  {educational_requirements}
                    </p>
                    <p className='my-title'>
                        <span className='my-span-title'>Experiences:</span> <br />  {experiences}
                    </p>
                </div>
                {/* left side end*/}

                {/* right side start */}

                <div className=' md:w-[30%]  flex flex-col mt-10'>
                    <div className='bg-[#F4F2FF]  rounded-lg mb-5  p-6'>
                        <h3 className='mb-3 font-bold text-lg'>Job Details</h3>
                        <hr />
                        <div className='my-3 flex gap-1 items-center'>
                            <img src="https://i.ibb.co/7vW76Nx/Frame.png" alt="" />
                            <p><span className='font-semibold text-base mr-2 '>Salary :</span>{salary}</p>
                        </div>
                        <div className='my-3 flex gap-1 items-center'>
                            <img src="https://i.ibb.co/nwpKJJc/Frame-1.png" alt="" />
                            <p><span className='font-semibold text-base mr-2'>Job Title:</span>{job_title}</p>
                        </div>
                        <h3 className='my-3 font-bold text-lg'>Contact Information</h3>
                        <hr />
                        <div className='my-3 flex gap-1 items-center '>
                            <img src="https://i.ibb.co/dg0sv19/Frame-2.png" alt="" />
                            <p><span className='font-semibold text-base mr-2'>Phone:</span>{contact_information?.phone}</p>
                        </div>
                        <div className='my-3 flex gap-1 items-center' >
                            <img src="https://i.ibb.co/YWtFDSb/Frame-3.png" alt="" />
                            <p><span className='font-semibold text-base mr-2'>Email:</span>{contact_information?.email}</p>
                        </div>
                        <div className='my-3 flex gap-1 items-center'>
                            <img src="https://i.ibb.co/Y3Hc7Z7/Frame-4.png" alt="" />
                            <p><span className='font-semibold text-base mr-2'>Address:</span>{location}</p>
                        </div>
                    </div>
                    <div className=' grow-0'>
                        <button onClick={()=>addToDb(id)} className='my-btn w-full '>Apply Now</button>
                    </div>
                </div>

            </section>
        </>
    );
};

export default JobDetails;