import React from 'react';
import Banner from './Banner/Banner';
import JobCategories from './JobCategories/JobCategories';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';



const Home = () => {
  
    return (
        <>
          <Banner>
          </Banner>
          <JobCategories></JobCategories>
          <FeaturedJobs></FeaturedJobs>
        </>
    );
};

export default Home;