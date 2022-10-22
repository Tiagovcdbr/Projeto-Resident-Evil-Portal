/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../EnjoyGameLink/EnjoyGameLink.module.scss';

import GameLinkIMG from '../../../../../images/Portal/logo_renet.png';
import Ps4LogoIMG from '../../../../../images/Portal/logo_Ps4.png';
import Ps5LogoIMG from '../../../../../images/Portal/logo_Ps5.png';
import UpgradeLogoIMG from '../../../../../images/Portal/icon_upgrade.png';
import XboxOneIMG from '../../../../../images/Portal/logo_Xboxone.png';
import XboxSeriesIMG from '../../../../../images/Portal/logo_Xboxseries.png';

function EnjoyGameLink() {
  return (
    <div className={styles.enjoy_gamelink}>
      <div className={styles.gamelink_left}>
        <h3>
        PLAY DATA
          <span className={styles.logo}>
            <img src={GameLinkIMG} alt="Game Link" />
          </span>
        </h3>
        <p>
          A free web service linked with supported games 
        <br>
        </br>
          to enhance the Resident Evil experience.
        </p>
        <a className={styles.btn}>
          MORE
        </a>
      </div>

      <ul className={styles.gamelink_list}>
        <li className={styles.village}>
          <a></a>
        </li>
        <li className={styles.re723}>
          <div className={styles.re723_intro}>
            <p>RE NET supports Current Generation Platforms!</p>
            <ul className={styles.re723_intro_hard}>
            <li>
              <img src={Ps4LogoIMG} alt="logo ps4" />
              <img className={styles.icon_upgrade} src={UpgradeLogoIMG} alt="Upgrade" />
              <img src={Ps5LogoIMG} alt="logo ps5" />
            </li>

            <li>
              <img src={XboxOneIMG} alt="Xbox one" />
              <img className={styles.icon_upgrade} src={UpgradeLogoIMG} alt="Upgrade" />
              <img className={styles.logo_xboxseries} src={XboxSeriesIMG} alt="Xbox Series X" />
            </li>
            </ul>
          </div>

          <div className={styles.re723_titlelink}>
              <li className={styles.seven}>
                <a></a>
              </li>
              <li className={styles.two}>
                <a></a>
              </li>
              <li className={styles.three}>
                <a></a>
              </li>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default EnjoyGameLink