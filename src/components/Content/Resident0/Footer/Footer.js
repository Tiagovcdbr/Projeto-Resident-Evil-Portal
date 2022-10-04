import React from 'react'

import styles from '../Footer/Footer.module.scss';

import PsIMG from '../../../../images/Resident0/psf_b.png'
import Ps4IMG from '../../../../images/Resident0/ps4_b.png'
import SwitchIMG from '../../../../images/Resident0/nintendoswitch_wb.png'
import XboxIMG from '../../../../images/Resident0/xboxone_b.png'
import SteamIMG from '../../../../images/Resident0/steam_b.png'
import LogoCapcomIMG from '../../../../images/Resident0/capcom_c_f.png'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.title_footer}>
        <ul className={styles.title_footer_platform}>
          <li className={styles.pf_ps}>
            <img src={PsIMG} alt="Ps Img" />
          </li>

          <li className={styles.pf_ps4}>
            <img src={Ps4IMG} alt="Ps4 Img" />
          </li>

          <li className={styles.pf_switch}>
            <img src={SwitchIMG} alt="Switch Img" />
          </li>

          <li className={styles.pf_xbox}>
            <img src={XboxIMG} alt="Xbox Img" />
          </li>

          <li className={styles.pf_steam}>
            <img src={SteamIMG} alt="Steam Img" />
          </li>
        </ul>

        <ul className={styles.title_footer_platform_copyright}>
          <li>
            "PlayStation" and the "PS" Family logo are registered 
            trademarks and "PS4" is a trademark of Sony Interactive 
            Entertainment Inc.
          </li>

          <li>
            Nintendo Switch™ and The Nintendo Switch logo and 
            Joy-Con™ are registered trademarks of Nintendo.
          </li>

          <li>
            © Valve Corporation. Steam and the Steam logo are 
            trademarks and/or registered trademarks of Valve 
            Corporation in the U.S. and/or other countries.
          </li>
        </ul>

        <ul className={styles.title_footer_menu}>
          <li>
            <a href='https://www.capcom.com/capcom/legal_privacy/privacy.html' target={'_blank'} rel="noreferrer">Privacy Policy</a>
          </li>
        </ul>

        <div className={styles.title_footer_capcom}>
          <p className={styles.title_footer_capcom_logo}>
            <a href='https://www.capcom.com/' target={'_blank'} rel="noreferrer">
              <img src={LogoCapcomIMG} alt="Logo Capcom" />
            </a>
          </p>
          <small className={styles.title_footer_capcom_copyright}>
            ©CAPCOM CO.,LTD. ALL RIGHTS RESERVED. 
          </small>
        </div>
      </div>
    </div>
  )
}

export default Footer