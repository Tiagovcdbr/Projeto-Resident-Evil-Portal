import React from 'react'

import Header from 'pages/ResidentEvil5/Header/Header'
import Hero from 'pages/ResidentEvil5/Hero/Hero'
import StoryWrapper from 'pages/ResidentEvil5/Story/StoryWrapper'
import Chara from 'pages/ResidentEvil5/SectionCharacters/Chara'
import FixedBg from 'pages/ResidentEvil5/FixedBg/FixedBg'
import CoopPlay from 'pages/ResidentEvil5/CoopPlay/CoopPlay'
import AdditionalContent from 'pages/ResidentEvil5/AdditionalContent/AdditionalContent'
import UpdateMotion from 'pages/ResidentEvil5/UpdateMotion/UpdateMotion'
import Product from 'pages/ResidentEvil5/Product/Product'
import ProductDownload from 'pages/ResidentEvil0/ProductDownload/ProductDownload'
import Especification from './Export/Resident0/Especification'
import Box from './Content/Resident0/OfficialAccount/Box'
import SelectLang from './Content/Resident0/SelectLanguage/SelectLang'
import Footer from './Content/Resident0/Footer/Footer'

function Resident5() {
  return (
    <>
      <Header />
      <Hero />
      <StoryWrapper />
      <FixedBg />
      <Chara />
      <CoopPlay />
      <AdditionalContent />
      <UpdateMotion />
      <Product />
      <ProductDownload />
      <Especification />
      <Box /> 
      <SelectLang />
      <Footer />
    </>
  )
}

export default Resident5