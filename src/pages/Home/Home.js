import React from 'react'
import Header from '../../components/other/Header/Header'
import Main from '../Home/Main/Main'
import LineUpGames from './LineUpGames/LineUpGames';
import { LineUpGamesContent } from './data/DataDetails';
import Aside from './Aside/Aside';
import Swiper from '../../utils/Swiper/index';
import Contentsknow from './Articles/Contentsknow';
import ContentsEnjoy from './Articles/Contents/ContentsEnjoy';
import SliderBars from '../../utils/SliderBars/SliderBars';
import Profile from './Profile/Profile';
import EnjoyGameLink from './Articles/Contents/EnjoyGameLink/EnjoyGameLink';
import EnjoyAmbassador from './Articles/Contents/EnjoyAmbassador/EnjoyAmbassador';
import CautionSite from './CautionSite/CautionSite';
import Footer from '../../components/Content/Resident0/Footer/Footer'
import Box from '../../components/Content/Resident0/OfficialAccount/Box';
import SelectLang from '../../components/Content/Resident0/SelectLanguage/SelectLang'

function Home() {
  return (
    <>      
      <Header />      
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
      <Box />
      <SelectLang />
      <Footer />
    </>
  )
};

export default Home;