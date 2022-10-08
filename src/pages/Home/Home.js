import React from 'react'
import Header from '../../components/other/Header/Header'
import Main from '../Home/Main/Main'
import LineUpGames from './LineUpGames/LineUpGames';
import { LineUpGamesContent } from './data/DataDetails';
import Aside from './Aside/Aside';
import Swiper from '../../utils/Swiper/index';
import Contents from './Contents/Contents';

function Home() {
  return (
    <>
      <Header />
      <Aside />
      <Main />
      <Swiper />
      <Contents />
      <LineUpGames {...LineUpGamesContent} /> 
    </>
  )
};

export default Home;