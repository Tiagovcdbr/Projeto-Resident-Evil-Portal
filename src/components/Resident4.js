import React from 'react'

import "../styles/app.scss";
import Header from '../pages/ResidentEvil4/Header/Header'
import Hero from 'pages/ResidentEvil4/Hero/Hero';
import StoryWrapper from 'pages/ResidentEvil4/Story/StoryWrapper';
import FixedBg from 'pages/ResidentEvil4/FixedBg/FixedBg';
import Chara from 'pages/ResidentEvil4/SectionCharacters/Chara';
import Product from 'pages/ResidentEvil4/Product/Product';

function Resident4() {
  return (
    <>
      <Header />
      <Hero /> 
      <StoryWrapper />
      <FixedBg /> 
      <Chara />
      <Product />   
    </>
  )
}

export default Resident4;