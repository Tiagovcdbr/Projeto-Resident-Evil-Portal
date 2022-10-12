import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Rebecca from '../pages/ResidentEvil0/CharacterDetails/Rebecca/CharacterRebecca'

export default function NextedRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Rebecca-Information" element={< Rebecca />} />
      </Routes>
    </BrowserRouter>
  )
}