import React, { useEffect, useState } from 'react';
import { getAppliedJobInfo } from '../../utils/fakedb';
import { useLoaderData } from 'react-router-dom';
import ApplideJob from './ApplideJob';

const AppliedJobs = () => {
    const allJobs = useLoaderData()[1];
    const [myJobs, setMyJobs] = useState([])
    const [defaultJobs, setDefaultJobs] = useState([])
    const [filterJobs, setRemoteJobs] = useState([])
    const [onSiteJobs, setOnSiteJobs] = useState([])
    

    useEffect(() => {
        const myNewJobs = []
        const findFromLocal = getAppliedJobInfo()
        const findStorageLength = Object.keys(findFromLocal).length;

        if (findStorageLength > 0) {
            for (let id in findFromLocal) {
                const isAvailableJobs = allJobs.filter(job => job.id == id)
                myNewJobs.push(...isAvailableJobs);

                const myAppliedJobs = myNewJobs
                setMyJobs( myAppliedJobs)
                setDefaultJobs(myAppliedJobs)
                setRemoteJobs(myAppliedJobs)
                setOnSiteJobs( myAppliedJobs)
                

            }
           

        }
        else {

            nothing = 'nothing'
        }

    }, [])
    const FilterRemoteJobs = () => {
            const filter = document.getElementById('filter').value
        if(filter==='Remote'){
           const RemoteJobs = filterJobs.filter(e=> e.remote_or_onsite =="Remote")

          setMyJobs(RemoteJobs)
        }
        if(filter==='On-Site'){
            const OnsiteJobs = onSiteJobs.filter(e=> e.remote_or_onsite =="Onsite")
            setMyJobs(OnsiteJobs)

        }
        if(filter==='default'){
           
            setMyJobs(defaultJobs)

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
                        <option value="default"> Filters</option>
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