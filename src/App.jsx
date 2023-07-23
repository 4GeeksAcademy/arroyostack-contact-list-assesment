import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './views/Layout';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
};

export default App;
