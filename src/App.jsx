import React from 'react';
import Nav from './Components/Nav/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
};

export default App;