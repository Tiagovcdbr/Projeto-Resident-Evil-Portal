import React from 'react'

import Header from 'pages/ResidentEvil5/Header/Header'
import Hero from 'pages/ResidentEvil5/Hero/Hero'
import StoryWrapper from 'pages/ResidentEvil5/Story/StoryWrapper'
import Chara from 'pages/ResidentEvil5/SectionCharacters/Chara'
import FixedBg from 'pages/ResidentEvil5/FixedBg/FixedBg'
import CoopPlay from 'pages/ResidentEvil5/CoopPlay/CoopPlay'
import AdditionalContent from 'pages/ResidentEvil5/AdditionalContent/AdditionalContent'

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
    </>
  )
}

export default Resident5