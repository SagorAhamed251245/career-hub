import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const dynamic = useParams()
   
    const [jobs , setJob] = useState([])
   const {id}= jobs
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
        <div>
           <div>
            <h3>Job  </h3>
           </div>
        </div>
    );
};

export default JobDetails;