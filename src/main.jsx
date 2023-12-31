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
import JobDetails from './Components/Home/FeaturedJobs/JobDetails';
import ErrorPage from './Components/Error/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element:<AppliedJobs></AppliedJobs>,
        loader: JobPageLoader
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
