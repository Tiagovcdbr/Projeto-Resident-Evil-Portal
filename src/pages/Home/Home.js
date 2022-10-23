import React from 'react'
import Header from '../../components/other/Header/Header'
import Main from '../Home/Main/Main'
import LineUpGames from './LineUpGames/LineUpGames';
import { LineUpGamesContent } from './data/DataDetails';
import Aside from './Aside/Aside';
import Swiper from '../../utils/Swiper/index';
import Contentsknow from './Articles/Contentsknow';
import FixedMovieBg from './FixedMovieBg/FixedMovieBg';
import ContentsEnjoy from './Articles/Contents/ContentsEnjoy';
import SliderBars from '../../utils/SliderBars/SliderBars';
import Profile from './Profile/Profile';
import EnjoyGameLink from './Articles/Contents/EnjoyGameLink/EnjoyGameLink';
import EnjoyAmbassador from './Articles/Contents/EnjoyAmbassador/EnjoyAmbassador';
import CautionSite from './CautionSite/CautionSite';

function Home() {
  return (
    <>      
      <Header />
      <FixedMovieBg />      
      <Aside />
      <Main />
      <Swiper />
      <SliderBars /> 
      <Profile />
      <Contentsknow /> 
      <LineUpGames {...LineUpGamesContent} /> 
      <ContentsEnjoy /> 
      <EnjoyGameLink />
      <EnjoyAmbassador />
      <CautionSite />
    </>
  )
};

export default Home;