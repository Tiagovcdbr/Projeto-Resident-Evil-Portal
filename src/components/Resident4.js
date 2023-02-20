import React from 'react'

import "../styles/app.scss";
import Header from '../pages/ResidentEvil4/Header/Header'
import Hero from 'pages/ResidentEvil4/Hero/Hero';
import StoryWrapper from 'pages/ResidentEvil4/Story/StoryWrapper';
import FixedBg from 'pages/ResidentEvil4/FixedBg/FixedBg';
import Chara from 'pages/ResidentEvil4/SectionCharacters/Chara';
import Product from 'pages/ResidentEvil4/Product/Product';
import ProductDownload from '../pages/ResidentEvil0/ProductDownload/ProductDownload';
import Especification from './Export/Resident0/Especification';
import Box from './Content/Resident0/OfficialAccount/Box';
import SelectLang from './Content/Resident0/SelectLanguage/SelectLang';
import Footer from './Content/Resident0/Footer/Footer';

function Resident4() {
  return (
    <>
      <Header />
      <Hero /> 
      <StoryWrapper />
      <FixedBg /> 
      <Chara />
      <Product />
      <ProductDownload />
      <Especification />
      <Box /> 
      <SelectLang />
      <Footer />    
    </>
  )
}

export default Resident4;