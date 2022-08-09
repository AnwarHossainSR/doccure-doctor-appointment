import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../../pages/App';
import Footer from '../../app/Footer';
import Navbar from '../../app/Navbar';
const index = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default index;
