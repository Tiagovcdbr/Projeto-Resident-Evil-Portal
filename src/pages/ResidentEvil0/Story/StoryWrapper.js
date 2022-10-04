import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./StoryWrapper.module.scss";
import SystemIMG from "../../../images/Resident0/system1.jpg"
import HistoryIMG from "../../../images/Resident0/story3.jpg"

function StoryWrapper() {
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);
  
  return (
    <div className={styles.system_story_wrapper}>
        <div className={styles.system}>
          <div data-aos="fade-right" className={styles.system_image}>
                <img src={SystemIMG} alt="System 1" />
              <div className={styles.system_image_overlay}></div>                
          </div>
          <div data-aos="fade" className={styles.system_descr}>
            <div className={styles.system_descr_bg}></div>
              <div className={styles.system_descr_inner}>
              <h3 className={styles.system_lead}>
                Unearth the fate of S.T.A.R.S. Bravo Team, 
                before the events of Resident Evil.
              </h3>
              <div  className={styles.system_detail}>
                RE0 details the events aboard the Ecliptic Express, 
                which led up to the Mansion Incident depicted in RE1. 
                This ambitious prequel featured various mechanics that 
                were new to the series, including the partner zapping 
                system which allows players to switch between the two 
                protagonists on the fly.
              <br>
              </br>
              <br>
              </br>
                Wesker Mode* lets you experience the game in a whole 
                new way by introducing series antagonist Albert Wesker 
                as a playable character, complete with his superhuman 
                powers.                
              </div>
            </div>
          </div>            
        </div>
        <div className={styles.story}>
          <div data-aos="fade-right" className={styles.story_image}>
            <img src={HistoryIMG} alt="History" />
          </div>
          <div data-aos="fade" className={styles.story_descr}>
            <div className={styles.story_descr_bg}></div>
              <div className={styles.story_descr_inner}>
                <h3 className={styles.story_lead}>STORY</h3>
                <div className={styles.story_detail}>
                    In the year 1998, the Raccoon City Police Department 
                    dispatched their elite unit S.T.A.R.S. Bravo Team to 
                    investigate a series of bizarre murders on the outskirts 
                    of the Midwestern city.
                  <br>
                  </br>
                  <br>
                  </br>
                    While en route, the team's helicopter is forced to make 
                    an emergency landing falling a sudden engine failure. The 
                    team set out from the crash site only to discover that 
                    the forest where they landed hid an overturned military 
                    vehicle, dead soldiers, and orders for the transport of 
                    Billy Coen, a prisoner who had been sentenced to death.
                  <br>
                  </br>
                  <br>
                  </br>
                    As the team continue their search of the area, rookie member 
                    Rebecca Chambers discovers a passenger train. Seeing no signs 
                    of life, she steps on board...
                </div>
              </div>            
          </div>
        </div>
    </div>
  )
}

export default StoryWrapper;