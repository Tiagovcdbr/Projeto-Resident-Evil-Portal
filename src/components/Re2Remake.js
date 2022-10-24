/* eslint-disable react/jsx-pascal-case */
import React from 'react'

import "../styles/app.scss";
import Header from "../pages/ResidentEvil2/Header/Header";
import Main from "../pages/ResidentEvil2/Main/Main";
import About_Umbrella from "../pages/ResidentEvil2/About_Umbrella/About_Umbrella"
import { InfoUmbrella } from "../pages/ResidentEvil2/data/DataUmbrella";
import Leon from "../pages/ResidentEvil2/Leon/Leon";
import { InfoLeon } from "../pages/ResidentEvil2/data/DataLeon";
import Claire from "../pages/ResidentEvil2/Claire/Claire";
import { InfoClaire } from "../pages/ResidentEvil2/data/DataClaire";
import Sherry from "../pages/ResidentEvil2/Sherry/Sherry";
import { InfoSherry } from "../pages/ResidentEvil2/data/DataSherry";
import Ada from "../pages/ResidentEvil2/Ada/Ada";
import { InfoAda } from "../pages/ResidentEvil2/data/DataAda";
import Details from "../pages/ResidentEvil2/Details/Details";
import { DetailsContent } from "../pages/ResidentEvil2/data/DataDetails";
import Videos from "../pages/ResidentEvil2/Videos/Videos";
import Gallery from "../pages/ResidentEvil2/Gallery/Gallery";
import MrX from "../pages/ResidentEvil2/MrX/MrX";
import { InfoMrX } from "../pages/ResidentEvil2/data/DataMrX";
import Annete from "../pages/ResidentEvil2/Annete/Annete";
import { InfoAnnete } from "../pages/ResidentEvil2/data/DataAnnete";
import BioWilliam from '../pages/ResidentEvil2/BioWilliam/BioWilliam';
import { BioWilliamContent } from '../pages/ResidentEvil2/data/DataBioWilliam';

function Re2Remake() {
  return (
  <>
    <Header />
      <Main />
        <About_Umbrella {...InfoUmbrella} />        
         <Leon {...InfoLeon} />
          <Claire {...InfoClaire} />
           <Sherry {...InfoSherry} />
           <Ada {...InfoAda} />
          <MrX {...InfoMrX } />
         <Annete {...InfoAnnete } />
        <BioWilliam {...BioWilliamContent } />
       <Videos />
      <Details {...DetailsContent} />      
    <Gallery />   
  </>   
  )
};

export default Re2Remake;