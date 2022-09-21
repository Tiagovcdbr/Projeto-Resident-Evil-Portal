import React from 'react'

import "../styles/app.scss";
import Header from '../pages/ResidentEvil0/Header/Header';
import Hero from '../pages/ResidentEvil0/Hero/Hero';
import StoryWrapper from '../pages/ResidentEvil0/Story/StoryWrapper';
import FixedBg from '../pages/ResidentEvil0/FixedBg/FixedBg';

function Resident0() {
  return (
    <>
        <Header /> 
        <Hero /> 
        <StoryWrapper />
        <FixedBg />    
    </>
  )
}

export default Resident0;