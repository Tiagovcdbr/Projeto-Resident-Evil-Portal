import ProductDownload from 'pages/ResidentEvil0/ProductDownload/ProductDownload'
import AdditionalContent from 'pages/ResidentEvil6/AdditionalContent/AdditionalContent'
import CoopPlay from 'pages/ResidentEvil6/CoopPlay/CoopPlay'
import FixedBg from 'pages/ResidentEvil6/FixedBg/FixedBg'
import Header from 'pages/ResidentEvil6/Header/Header'
import Hero from 'pages/ResidentEvil6/Hero/Hero'
import Product from 'pages/ResidentEvil6/Product/Product'
import Chara from 'pages/ResidentEvil6/SectionCharacters/Chara'
import StoryWrapper from 'pages/ResidentEvil6/Story/StoryWrapper'
import UpdateMotion from 'pages/ResidentEvil6/UpdateMotion/UpdateMotion'
import React from 'react'
import Footer from './Content/Resident0/Footer/Footer'
import Box from './Content/Resident0/OfficialAccount/Box'
import SelectLang from './Content/Resident0/SelectLanguage/SelectLang'
import Especification from './Export/Resident0/Especification'

function Resident6() {
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

export default Resident6