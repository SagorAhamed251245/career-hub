import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const dynamic = useParams()
   
    const [jobs , setJob] = useState([])
   const {
    id, 
    job_description, 
    job_responsibility,
    educational_requirements, 
    experiences,
    salary,
    job_title,
    contact_information,
    
    

}= jobs



    useEffect(()=>{
        fetch('/public/JobFeatured.json')
        
        .then(res=> res.json())
        .then(data=> setJob(data))
        
    },[])
    
    if(jobs.length>0){
       
        const myJob = jobs.filter(job => job.id == dynamic.id);
        setJob(...myJob)
      
    }
   
   
    
    return (
        <>
           <div className='text-3xl font-bold text-center mt-16 mb-[150px]'>
            <h3 >Job Details</h3>
           </div>
           
           <section className='my-container'>

            <div>
               <p>
                <span className='font-bold'>Job Description:</span>  {job_description}
               </p>
            </div>
            {/* left side end*/}

            {/* right side start */}
            <div>
              <h2>email: {contact_information?.phone}</h2>
            </div>
           </section>
        </>
    );
};

export default JobDetails;