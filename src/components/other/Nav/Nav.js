/* eslint-disable no-sequences */
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import useSound from 'use-sound';

import soundCursor from '../../../audios/resident_evil2_sound cursor.mp3';

/* Inclusão de todos as seções nessa aba Nav */
const Nav = ({ toggle }) => {
  const [play] = useSound(soundCursor);

  return (    
    <nav className={styles.menu}>
      <ul>
        <li onClick={toggle}>
          <Link to="Resident-Evil-0-HD-Remaster" spy={true} smooth={true} duration={800} onClick={play}>
          Resident 0
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="Resident-Evil-HD-Remaster" spy={true} smooth={true} duration={800} onClick={play}>
            Resident Remake
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="Resident-Evil-2-Remake" spy={true} smooth={true} duration={800} onClick={play}>
            Resident 2 Remake
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="Resident-Evil-3-Remake" spy={true} smooth={true} duration={800} onClick={play}>
            Resident 3 Remake
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="Resident-Evil-4" spy={true} smooth={true} duration={800} onClick={play}>
            Resident Evil 4
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="Resident-Evil-5" spy={true} smooth={true} duration={800} onClick={play}>
          Resident Evil 5
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/" spy={true} smooth={true} duration={800} onClick={play}>
          Resident Evil 6
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/" spy={true} smooth={true} duration={800} onClick={play}>
          Resident Evil 7
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/" spy={true} smooth={true} duration={800} onClick={play}>
          Resident Evil Village
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/" spy={true} smooth={true} duration={800} onClick={play}>
          RE Outbreak
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/" spy={true} smooth={true} duration={800} onClick={play}>
          RE Outbreak #File 2
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/" spy={true} smooth={true} duration={800} onClick={play}>
          RE Revelations 1 & 2
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/" spy={true} smooth={true} duration={800} onClick={play}>
          RE Code Veronica
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/" spy={true} smooth={true} duration={800} onClick={play}>
          Resident Evil 4 Remake
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
