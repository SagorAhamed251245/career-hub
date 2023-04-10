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
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
