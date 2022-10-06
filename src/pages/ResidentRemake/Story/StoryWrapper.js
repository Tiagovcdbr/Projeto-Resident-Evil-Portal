import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./StoryWrapper.module.scss";
import SystemIMG from "../../../images/ResidentRemake/system1.jpg"
import HistoryIMG from "../../../images/ResidentRemake/story1.jpg"

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
                The original survival horror experience
              </h3>
              <div  className={styles.system_detail}>
                Experience the world-class remaster that brought the 
                1996 horror classic back to life. The original 2002 
                remaster not only featured reimagined HD environments 
                and characters, but also enhanced vocal performances 
                to create an even more terrifying retelling of the 
                original story. The remaster launched to widespread 
                success, and established itself as a survival horror 
                masterpiece.
              <br>
              </br>
              <br>
              </br>
                This HD remaster features all of the chilling moments and 
                claustrophobic tension of the original release, and also 
                includes the Wesker's Report and Wesker's Report II video 
                features. This timeless interpretation allows you to 
                discover the mysteries at the heart of the abandoned mansion 
                like never before, and struggle to survive the nightmares 
                walking its halls.                
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
                <h3 className={styles.story_lead}>Survive the horror</h3>
                <div className={styles.story_detail}>
                    In the year 1998, the Raccoon City Police Department dispatched 
                    their elite unit S.T.A.R.S. Bravo Team to investigate a series 
                    of bizarre murders on the outskirts of the Midwestern city.
                  <br>
                  </br>
                  <br>
                  </br>
                    After Bravo Team goes missing the S.T.A.R.S. Alpha Team set out 
                    to survey the forest where Bravo Team was last heard from, only 
                    to discover the wreckage of Bravo Team's helicopter and the 
                    corpse of their pilot.
                  <br>
                  </br>
                  <br>
                  </br>
                    Chris Redfield leads Alpha Team deeper into the forest to continue 
                    their search, where their unit is ambushed by a pack of undead dogs. 
                    The team flee into a nearby mansion, unaware of the horrors to come...
                </div>
              </div>            
          </div>
        </div>
    </div>
  )
}

export default StoryWrapper;