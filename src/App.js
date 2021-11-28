/* eslint-disable react/jsx-pascal-case */

import { BrowserRouter as Router } from "react-router-dom";
import "./styles/app.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About_Umbrella from "./components/about_umbrella/About_Umbrella";
import { InfoUmbrella } from "./data/DataUmbrella";
import Leon from "./components/Leon/Leon";
import { InfoLeon } from "./data/DataLeon";
import Claire from "./components/Claire/Claire";
import { InfoClaire } from "./data/DataClaire";
import Sherry from "./components/Sherry/Sherry";
import { InfoSherry } from "./data/DataSherry";

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <About_Umbrella {...InfoUmbrella} />
      <Leon {...InfoLeon} />
      <Claire {...InfoClaire} />
      <Sherry {...InfoSherry} />
    </Router>
  );
}

export default App;
