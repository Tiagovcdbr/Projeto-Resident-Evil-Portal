import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Re2Remake from '../components/Re2Remake';
import Resident0 from '../components/Resident0';

export default function ApplicationRoutes () {
  return ( 
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={ <Home/> } />        
        <Route path="/re2remake" element={< Re2Remake />} />
        <Route path="/resident0" element={< Resident0 />} />      
      </Routes>
    </BrowserRouter>
  )
}