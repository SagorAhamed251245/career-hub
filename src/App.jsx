import React from 'react';
import Nav from './Components/Nav/Nav';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <ToastContainer />
    </>
  );
};

export default App;