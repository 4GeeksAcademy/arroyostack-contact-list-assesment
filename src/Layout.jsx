import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';

const Layout = () => {

  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
};

export default Layout;
