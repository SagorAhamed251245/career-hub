import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategorie from './JobCategorie';

const JobCategories = () => {
    const jobCatagories = useLoaderData()[0]
   
    
  
    return (
        <section className='my-container'>
            <div className='text-center'>
                <h2 className='my-h2 '>
                    Job Categories List
                </h2>
                <p>
                Endless job prospects await you with all the relevant information you need. The future is yours. Claim it. 
                </p>
            </div>
            <div className=' flex  flex-col   md:flex-row justify-center md:justify-between my-10 gap-5'>
                 
                
                 {
                    jobCatagories.map(catagories=> <JobCategorie
                         key={catagories.id} 
                         catagories={catagories}
                         ></JobCategorie>)
                 }
                 
              
            </div>
        </section>
    );
};

export default JobCategories;