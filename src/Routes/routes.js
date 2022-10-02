import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Resident0 from '../components/Resident0';
import Re2Remake from '../components/Re2Remake';


export default function ApplicationRoutes () {
  return ( 
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={ <Home/> } />        
        <Route path="/Resident-Evil-2-Remake" element={< Re2Remake />} />
        <Route path="/residentevil0" element={< Resident0 />} />      
      </Routes>
    </BrowserRouter>
  )
}