/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../About/About.module.scss'

function About() {
  return (
    <div className={styles.conts_box_about} id="about">
      <h2 className={styles.sec_ttl_about}>ABOUT</h2>
        <div className={styles.conts_box_inner_about_story}>
        <h3 className={styles.conts_ttl_about}>
          Discover the origins of this 
          unprecedented biohazard, 
          and witness its end.
        </h3>
        <div className={styles.text_box_about}>
          <p className={styles.lead}>
            Fight your way to freedom from the brink of despair
          </p>
          <p>
            A series of strange disappearances have been 
            occurring in the American Midwest within a 
            place called Racoon City. A specialist 
            squad of the police force known as S.T.A.R.S. 
            has been investigating the case, and have 
            determined that the pharmaceutical company 
            Umbrella and their biological weapon, the 
            T-Virus, are behind the incidents—though 
            they've lost several members in the process. 
            Jill Valentine and the other surviving S.T.A.R.S. 
            members try to make this truth known, but 
            find that the police department itself is 
            under Umbrella's sway and their reports are 
            rejected out of hand.
          </p>
          <p>
            However, soon reports of a grisly "cannibal virus" 
            begin to surface, and vicious dogs begin roaming 
            the streets. With the viral plague spreading 
            through the town and to her very doorstep, Jill 
            is determined to survive.
          <br>
          </br>
            However, unbeknownst to Jill, an extremely 
            powerful pursuer has already been dispatched 
            to eliminate her.
          </p>
        </div>

        </div>
        <div className={styles.conts_box_inner_about_about}>
          <div className={styles.text_box_about}>
            <p className={styles.lead}>
              More about the 1999 classic
            </p>
            <p>
              The original game, Resident Evil 3: Nemesis 
              was released in September 1999, and has gone 
              on to sell over 3.5 million copies as of 
              September 30, 2019.
              <br>
              </br>
              Just like its predecessor, Resident Evil 2, 
              the game is set in Raccoon City, a city 
              overrun by a whole new kind of biological 
              threat, but this game illustrates the outbreak 
              and conclusion of the incident.
              <br>
              </br>
              It follows the protagonist Jill Valentine 
              as she fights to escape her pursuer, the 
              Nemesis T-Type, and offers a new kind of 
              survival horror which plays off the fear 
              of being constantly and relentlessly 
              chased.
            </p>
            <p>
              This game, Resident Evil 3, reimagines 
              this city as it falls into chaos beneath 
              the undead horde, with a level of detail 
              and fidelity that can only now be realized 
              with current technology.
            </p>
          </div>
        </div>
    </div>
  )
}

export default About