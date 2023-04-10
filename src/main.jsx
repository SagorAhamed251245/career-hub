import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/Applied Jobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import { JobPageLoader} from './loaders/FetchAllJsonFile';
import FeaturedJob from './Components/Home/FeaturedJobs/FeaturedJob';
import JobDetails from './Components/Home/FeaturedJobs/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: JobPageLoader
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails>,
        
                    
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
  
);
