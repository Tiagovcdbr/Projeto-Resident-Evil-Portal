import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Resident0 from '../components/Resident0';
import Re2Remake from '../components/Re2Remake';
import Re3Remake from '../components/Re3Remake';
import ResidentRemake from '../components/ResidentRemake';
import ScrollToTop from '../components/other/Scroll/ScrollToTop';

/* Import dos Characters */

import Contentsknow from '../pages/Home/Articles/Contentsknow';
import BioJill from '../pages/ResidentEvil3/Character/Jill/BioJill';
import BioCarlos from '../pages/ResidentEvil3/Character/Carlos/BioCarlos';
import BioMikhail from '../pages/ResidentEvil3/Character/Mikhail/BioMikhail'
import BioNicholai from '../pages/ResidentEvil3/Character/Nicholai/BioNicholai'


export default function ApplicationRoutes () {
  return ( 
    <BrowserRouter>
    <ScrollToTop />   
      <Switch>
        <Route path="/" component={ Home } exact />        
        <Route path="/Resident-Evil-2-Remake" component={ Re2Remake } exact />
        <Route path="/Resident-Evil-0-HD-Remaster" component={ Resident0 } exact />                   
        <Route path="/Resident-Evil-HD-Remaster" component={ ResidentRemake } exact />
        <Route path="/Resident-Evil-3-Remake" component={ Re3Remake } exact />
        
        {/* Biography dos characters  */}
  
        <Route path="/Jill-Biography" component={ BioJill } exact />
        <Route path="/Carlos-Biography" component={ BioCarlos } exact />
        <Route path="/Mikhail-Biography" component={ BioMikhail } exact />
        <Route path="/Nicholai-Biography" component={ BioNicholai } exact />

        <Route path="/News" component={ Contentsknow } exact />

      </Switch>
    </BrowserRouter>
  )
}