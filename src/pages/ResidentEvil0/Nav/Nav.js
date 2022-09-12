/* eslint-disable no-sequences */
import { Link } from "react-scroll";
import styles from "./Nav.module.scss";
import useSound from 'use-sound';

import soundCursor from '../../../audios/resident_evil2_sound cursor.mp3';

/* Inclusão de todos personagens nessa aba Nav */
const Nav = ({ toggle }) => {
  const [play] = useSound(soundCursor);


  return (    
    <nav className={styles.menu}>
      <ul>
        <li onClick={toggle}>
          <Link to="news" spy={true} smooth={true} duration={800} onClick={play}>
          News
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="leon" spy={true} smooth={true} duration={800} onClick={play}>
            Movies
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="claire" spy={true} smooth={true} duration={800} onClick={play}>
            History
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="sherry" spy={true} smooth={true} duration={800} onClick={play}>
          Releases
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="ada" spy={true} smooth={true} duration={800} onClick={play}>
            Contents
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="mrx" spy={true} smooth={true} duration={800} onClick={play}>
            Play Data
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="annete" spy={true} smooth={true} duration={800} onClick={play}>
            About Portal
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="biowilliam" spy={true} smooth={true} duration={800} onClick={play}>
            Trailers
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="videos" spy={true} smooth={true} duration={800} onClick={play}>
            Official App
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
