import React from 'react'

import "../styles/app.scss";

import Header from '../pages/ResidentRemake/Header/Header'
import Hero from '../pages/ResidentRemake/Hero/Hero';
import Story from '../pages/ResidentRemake/Story/StoryWrapper'

function ResidentRemake() {
  return (
    <>
      <Header />
      <Hero />
      <Story />
    </>
  )
}

export default ResidentRemake