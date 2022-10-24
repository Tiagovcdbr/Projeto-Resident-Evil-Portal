import React from 'react';

import "../styles/app.scss";

import Header from '../pages/ResidentRemake/Header/Header';
import Hero from '../pages/ResidentRemake/Hero/Hero';
import Story from '../pages/ResidentRemake/Story/StoryWrapper';
import FixedBg from '../pages/ResidentRemake/FixedBg/FixedBg';
import Chara from '../pages/ResidentRemake/SectionCharacters/Chara';
import Product from '../pages/ResidentRemake/Product/Product';
import ProductDownload from '../pages/ResidentEvil0/ProductDownload/ProductDownload';
import Especification from './Export/Resident0/Especification';
import Box from './Content/Resident0/OfficialAccount/Box';
import SelectLang from './Content/Resident0/SelectLanguage/SelectLang';
import Footer from './Content/Resident0/Footer/Footer';

function ResidentRemake() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
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

export default ResidentRemake