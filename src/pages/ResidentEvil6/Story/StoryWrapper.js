import React from 'react'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./StoryWrapper.module.scss";
import SystemIMG from "../../../images/ResidentEvil6/system1.jpg"
import HistoryIMG from "../../../images/ResidentEvil6/story1.jpg"

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
                Four Characters, One Fate
              </h3>
              <div  className={styles.system_detail}>
                Resident Evil 6 was originally released in October 2012. 
                Consisting of four separate, yet interlocking 
                stories, players were confronted with a biological 
                terrorist threat on a global scale. The game also 
                drew acclaim as the first Resident Evil to feature 
                both Chris Redfield and Leon S. Kennedy in a single 
                title. 
              <br>
              </br>
                As characters in each of the four scenarios cross 
                paths and link fates, so do that of the players 
                as they meet in up to four-player, online 
                co-op--forever changing the face of multiplayer 
                gaming in the Resident Evil series. Got company? 
                RE6's cooperative multiplayer can be enjoyed 
                offline, as well. Just don't wake the neighbors.                
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
                    Over fifteen years since the destruction of Raccoon City...
                    In the face of the continuing threat posed by 
                    bioterrorism, the president of the United States 
                    decides to finally shed light on the truth of what 
                    happened in Raccoon City's final days. On the 
                    day of his speech, a bioterrorist attack rocks the 
                    seminar hall--and the truth is swallowed in darkness.
                  <br>
                  </br>
                    However, the fight is not yet lost. In Tall 
                    Oaks, USA, Leon S. Kennedy--framed for the 
                    president's assassination--tries to save the 
                    locals from the zombie threat. In Lianshiang, Chris Redfield
                     must combat a bioterrorism situation of his own. 
                     In the Republic of Edonia, a land wracked by 
                     civil war, Jake is hunted by...something...inhuman. 
                     And behind it all is Ada--though to what end, no 
                     one knows.
                  <br>
                  </br>
                     This is the story of their struggles, their triumphs, 
                     and their failures played out on a global scale.
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