import React from 'react'
import Header from '../../components/other/Header/Header'
import Main from '../Home/Main/Main'
import LineUpGames from './LineUpGames/LineUpGames';
import { LineUpGamesContent } from './data/DataDetails';
import Aside from './Aside/Aside';
import Swiper from '../../utils/Swiper/index';
import Contents from './Contents/Contents';
import Contentsknow from './Articles/Contentsknow';
import FixedMovieBg from './FixedMovieBg/FixedMovieBg';
import ContentsEnjoy from './Articles/Contents/ContentsEnjoy';
import SliderBars from '../../utils/SliderBars/SliderBars';

function Home() {
  return (
    <>      
      <Header />
      <FixedMovieBg />      
      <Aside />
      <Main />
      <Swiper />
      <SliderBars />
      <Contents />
      <Contentsknow />      
      <LineUpGames {...LineUpGamesContent} /> 
      <ContentsEnjoy />     
    </>
  )
};

export default Home;