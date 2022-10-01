import React from 'react'

import "../styles/app.scss";
import Header from '../pages/ResidentEvil0/Header/Header';
import Hero from '../pages/ResidentEvil0/Hero/Hero';
import StoryWrapper from '../pages/ResidentEvil0/Story/StoryWrapper';
import FixedBg from '../pages/ResidentEvil0/FixedBg/FixedBg';
import Chara from '../pages/ResidentEvil0/SectionCharacters/Chara';
import Product from '../pages/ResidentEvil0/Product/Product';
import ProductDownload from '../pages/ResidentEvil0/ProductDownload/ProductDownload';

function Resident0() {
  return (
    <>
        <Header /> 
        <Hero /> 
        <StoryWrapper />
        <FixedBg /> 
        <Chara /> 
        <Product /> 
        <ProductDownload />         
    </>
  )
}

export default Resident0;