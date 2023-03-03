import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Housing from '../../pages/Housing/Housing';
import Error404 from '../../pages/Error/Error404';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route patch='/housing' element={<Housing />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}
