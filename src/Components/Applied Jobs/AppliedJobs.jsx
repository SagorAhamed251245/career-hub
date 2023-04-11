import React, { useEffect, useState } from 'react';
import { getAppliedJobInfo } from '../../utils/fakedb';
import { useLoaderData } from 'react-router-dom';
import ApplideJob from './ApplideJob';

const AppliedJobs = () => {
    const allJobs = useLoaderData()[1];
    const [myJobs, setMyJobs] = useState([])
    const [filterJobs, setRemoteJobs] = useState([])
    const [onSiteJobs, setOnSiteJobs] = useState(false)

    useEffect(() => {
        const myNewJobs = []
        const findFromLocal = getAppliedJobInfo()
        const findStorageLength = Object.keys(findFromLocal).length;

        if (findStorageLength > 0) {
            for (let id in findFromLocal) {
                const isAvailableJobs = allJobs.filter(job => job.id == id)
                myNewJobs.push(...isAvailableJobs);

                const myJobs = myNewJobs
                setMyJobs(myJobs)

            }


        }
        else {

            nothing = 'nothing'
        }

    }, [])
    const FilterRemoteJobs = () => {
            const filter = document.getElementById('filter').value
        if(filter==='Remote'){
           const RemoteJobs = myJobs.filter(e=> e.remote_or_onsite =="Remote")

          setMyJobs(RemoteJobs)
        }
        else{
            console.log('not find')
        }

    }






    return (
        <>
            <div className='text-3xl font-bold text-center mt-16 p-16 mb-[150px]'>
                <h3 >Applied Jobs</h3>

            </div>

            <section className='my-container '>
                <div className='text-end'>
                    <select id='filter' onChange={FilterRemoteJobs} className="px-4 py-3 mb-5 w-[12%] font-bold rounded-md bg-[#F4F4F4] border-transparent  focus:border-gray-900 focus:bg-[#F4F4F4]  focus:ring-0 text-sm">
                        <option value=""> Filters</option>
                        <option value="Remote">Remote Jobs</option>
                        <option value="On-Site">On-Site Jobs</option>
                    </select>
                   
                </div>

                <div className='flex flex-col gap-5'>
                    {
                        myJobs.map(job => <ApplideJob key={job.id}
                            job={job}
                        ></ApplideJob>)
                    }
                </div>
            </section>
        </>
    );
};

export default AppliedJobs;