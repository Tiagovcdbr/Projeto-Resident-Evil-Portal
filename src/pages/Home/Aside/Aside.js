/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from '../Aside/Aside.module.scss';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

const Aside = () => {

  return (
    <div className={styles.nav_top}>
      <ul>
        <li className={styles.box_aside}>        
          <Link to="news" spy={true} smooth={true} duration={800} className={styles.N_Btn}>
            <Fade left duration={2000}>                   
              <span className={styles.link_title}>NEWS</span>
            </Fade>
          </Link>        
        </li>

        <li className={styles.box_aside}>
          <Link to="about" spy={true} smooth={true} duration={800} className={styles.H_Btn}>
            <Fade left duration={2200}>
              <span className={styles.link_title}>HISTORY</span>
            </Fade>
          </Link>
        </li>

        <li className={styles.box_aside}>
          <Link to="lineup" spy={true} smooth={true} duration={800} className={styles.T_Btn}>
            <Fade left duration={2400}>
              <span className={styles.link_title}>TITLE LINEUP</span>
            </Fade>
          </Link>
        </li>

        <li className={styles.box_aside}>
          <Link to="contents" spy={true} smooth={true} duration={800} className={styles.C_Btn}>
            <Fade left duration={2600}>
              <span className={styles.link_title}>CONTENTS</span>
            </Fade>
          </Link>
        </li>

        <li className={styles.box_aside}>
          <Link to="data" spy={true} smooth={true} duration={800} className={styles.P_Btn}>
            <Fade left duration={2800}>
              <span className={styles.link_title}>PLAY DATA</span>
            </Fade>
          </Link>
        </li>

        <li className={styles.box_aside}>
          <Link to="ambassador" spy={true} smooth={true} duration={800} className={styles.A_Btn}>
            <Fade left duration={3000}>
              <span className={styles.link_title}>AMBASSADOR</span>
            </Fade>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Aside