import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from './FeaturedJob';

const FeaturedJobs = () => {
    const JobFeatured = useLoaderData()[1]
    const [jobs , setJobs] = useState(false)
    if(!jobs){
        JobFeatured.slice(0, 4)
        console.log(JobFeatured)
    }
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

            <div className='md:flex flex-wrap justify-between mt-10 gap-3'>
               
                {
                    JobFeatured.map(job=> <FeaturedJob
                    key={job.id}
                    job={job}
                    ></FeaturedJob>)
                }
                
            </div>
        </section>
    );
};

export default FeaturedJobs;