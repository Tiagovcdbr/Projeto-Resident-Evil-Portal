import React from 'react'

import "../styles/app.scss";
import Header from '../pages/ResidentEvil0/Header/Header';
import Hero from '../pages/ResidentEvil0/Hero/Hero';
import StoryWrapper from '../pages/ResidentEvil0/Story/StoryWrapper';
import FixedBg from '../pages/ResidentEvil0/FixedBg/FixedBg';
import Chara from '../pages/ResidentEvil0/SectionCharacters/Chara';
import Product from '../pages/ResidentEvil0/Product/Product';

function Resident0() {
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

export default Resident0;