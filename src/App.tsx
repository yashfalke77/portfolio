import React from 'react';
import Home from '@pages/Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contact from '@pages/Contact/Contact';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default App;
