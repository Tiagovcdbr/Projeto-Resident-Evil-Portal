import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./StoryWrapper.module.scss";
import SystemIMG from "../../../images/ResidentEvil4/system2.jpg"
import HistoryIMG from "../../../images/ResidentEvil4/story1.jpg"

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
                Experience a new era of survival horror
              </h3>
              <div  className={styles.system_detail}>
                Step into the shoe of Leon S. Kennedy 
                as he shines a light on the grim 
                transformation of a European village 
                while searching for the President's 
                abducted daughter. Resident Evil 4 
                introduced an over-the-shoulder camera 
                and responsive action mechanics that didn't 
                just influence future titles in the RE series, 
                but the entire survival horror genre. 
              <br>
              </br>
              <br>
              </br>
                A masterpiece as both a survival horror 
                and action game, this title remains just as 
                much fun now as it was when it was first released. 
                This version of the game also contains 
                Separate Ways, a new scenario that was 
                included in HD rereleases of the original 
                title.               
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
                    Following the unprecedented disaster 
                    of the Raccoon City Incident, the Umbrella 
                    Corporation has collapsed under the weight 
                    of public outrage and government intervention. 
                    Leon S. Kennedy survived the city's fall, 
                    and has now been assigned as a special 
                    agent reporting to the President of the 
                    United States.
                  <br>
                  </br>
                  <br>
                  </br>
                    After the President's daughter is kidnapped, 
                    Leon is tasked with following eyewitness 
                    reports leading him to a small village in 
                    Europe to look for her. Even the horrors 
                    of Raccoon City couldn't prepare Leon 
                    for the secrets he would soon discover...
                  <br>
                  </br>
                </div>
              </div>            
          </div>
        </div>
    </div>
  )
}

export default StoryWrapper;