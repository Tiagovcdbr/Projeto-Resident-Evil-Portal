import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Re2Remake from '../components/Re2Remake';

export default function ApplicationRoutes () {
  return ( 
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={ <Home/> } />        
        <Route path="/re2remake" element={< Re2Remake />} />      
      </Routes>
    </BrowserRouter>
  )
}