import React, { useState } from 'react';
import { getAppliedJobInfo } from '../../utils/fakedb';
import { useLoaderData } from 'react-router-dom';
import ApplideJob from './ApplideJob';

const AppliedJobs = () => {
  const allJobs =  useLoaderData()[1];
  let newJobs = [];
  let nothing
  

    const getDataFromLocal =  getAppliedJobInfo()
    const getStorageLength = Object.keys(getDataFromLocal).length
 
    if (getStorageLength > 0) {
       
        for(let id in getDataFromLocal){
           const isAvailable = allJobs.filter(job => job.id == id)
          newJobs.push(...isAvailable)
       
        }
       
    }
    else{

        nothing ='nothing'
    }

   
    
    return (
        <>
             <div className='text-3xl font-bold text-center mt-16 p-16 mb-[150px]'>
                <h3 >Applied Jobs</h3>
            
            </div>
             
            <section className='my-container '>
                <div className='text-end'>
                     <button>Filter</button>
                </div>

                <div className='flex flex-col gap-5'>
                   {
                    newJobs.map(job => <ApplideJob key={job.id}
                     job={job}
                    ></ApplideJob>)
                   }
                </div>
            </section>
        </>
    );
};

export default AppliedJobs;