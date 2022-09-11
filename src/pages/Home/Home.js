import React from 'react'
import Header from '../../components/other/Header/Header'
import Main from '../Home/Main/Main'
import LineUpGames from './LineUpGames/LineUpGames';
import { LineUpGamesContent } from './data/DataDetails';


function Home() {
  return (
    <>
      <Header />
      <Main /> 
      <LineUpGames {...LineUpGamesContent} /> 
    </>
  )
};

export default Home;