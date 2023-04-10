
const JobCategoriesData = async () => {
  const JobCategoriesData = await fetch('JobCategories.json')
  const JobCategories = await JobCategoriesData.json()

  return  JobCategories 
}

const JobFeaturedData = async () => {
    const JobFeaturedData = await fetch('JobFeatured.json')
    const JobFeatured = await JobFeaturedData.json()
  
    return  JobFeatured
  }
 
  const JobPageLoader = async () => {
    return Promise.all([JobCategoriesData(), JobFeaturedData()]);
  };
  export {JobPageLoader}

