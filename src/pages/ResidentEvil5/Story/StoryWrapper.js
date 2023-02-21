import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./StoryWrapper.module.scss";
import SystemIMG from "../../../images/ResidentEvil5/system1.jpg"
import HistoryIMG from "../../../images/ResidentEvil5/story1.jpg"

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
                Fear Never Grows Old
              </h3>
              <div  className={styles.system_detail}>
                Resident Evil 5 was first released in 2009.
                Similarly, it's been ten years since 
                Chris Redfield's first brush with fear 
                at an old mansion in Raccoon City. 
                Now, in a blistering land far away
                from home, Agent Redfield must 
                eliminate a new threat and an old 
                nemesis--Albert Wesker.
                Traverse areas of blinding light and 
                impenetrable darkness in the first 
                Resident Evil bold enough to bring 
                horror into the daylight. With online 
                and couch co-op, you need not face 
                the fear alone. 
              <br>
              </br>
              <br>
              </br>
                Enter Sheva Alomar--a powerful new ally. 
                Together, she and Chris will pit themselves 
                against an incredible enemy to determine 
                which is stronger, their fear or their 
                faith in each other.               
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
                    Ten years ago, the Umbrella Corporation 
                    unleashed a biological threat of 
                    unprecedented proportions on Raccoon City. 
                    Chris Redfield, one of the few survivors 
                    of the incident, is now working as an 
                    agent for the Bioterrorism Security 
                    Assessment Alliance (BSAA). 
                    His mission: head to the Kijuju Autonomous 
                    Zone in an undisclosed African country 
                    and apprehend an arms dealer specializing 
                    in biological weapons. Little did he know 
                    that a darker force was at play--one that 
                    bore a familiar face...
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