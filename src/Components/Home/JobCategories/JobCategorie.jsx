import React from 'react';

const JobCategorie = ({catagories}) => {
    console.log(catagories)
    const {category_logo, category_name, jobs_available} =catagories
    return (
        <div className='bg-blue-300 mx-auto w-80 h-60 p-5 flex justify-center flex-col rounded-lg hover:shadow-xl'>
        <img className='w-12 rounded bg-[#f5f3ff] p-2' src={category_logo} alt="" />
        <h3 className='my-5 font-bold'>{category_name}</h3>
        <p>{jobs_available}</p>
     </div>
    );
};

export default JobCategorie;