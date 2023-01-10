import React from 'react'
import GlobalNav from '../pages/ResidentEvil3/GlobalNav/GlobalNav'
import Header from '../pages/ResidentEvil3/Header/Header'
import MovieBg from '../pages/ResidentEvil3/MovieBg/MovieBg'
import PageBuy from '../pages/ResidentEvil3/PageBuy/PageBuy'
import Wrapper from '../pages/ResidentEvil3/Wrapper/Wrapper'
import Topics from '../pages/ResidentEvil3/Topics/Topics'
import Trailer from '../pages/ResidentEvil3/Trailer/Trailer'
import About from '../pages/ResidentEvil3/About/About'

function Re3Remake() {
  return (
    <>
      <Header />
      <Wrapper />
      <MovieBg /> 
      <PageBuy />
      <GlobalNav />
      <Topics />  
      <Trailer />
      <About />
    </>
  )
}

export default Re3Remake