import React from 'react';

const NoJobs = () => {
    return (
        <>
            <div className="flex items-center justify-center w-screen h-[65vh]">
                <div className="px-4 lg:py-12">
                    <div className="lg:gap-4 lg:flex">
                        <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                            <h1 className="font-bold gradient-text text-7xl">Unfortunately</h1>
                            
                            <p className="mt-5 font-bold  text-center text-red-500 md:text-2xl">
                                You Have not applied any jobs 
                            </p>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default NoJobs;