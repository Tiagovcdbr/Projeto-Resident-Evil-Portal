import { Link } from "react-scroll";
import styles from "./Nav.module.scss";
/* Inclusão de todos personagens nessa aba Nav */
const Nav = ({ toggle }) => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li onClick={toggle}>
          <Link to="about_umbrella" spy={true} smooth={true} duration={800}>
            Prévia Umbrella
          </Link>
        </li>
        <li_2 onClick={toggle}>
          <Link to="leon" spy={true} smooth={true} duration={800}>
            Leon
          </Link>
        </li_2>
        <li_3 onClick={toggle}>
          <Link to="claire" spy={true} smooth={true} duration={800}>
            Claire
          </Link>
        </li_3>
        <li_4 onClick={toggle}>
          <Link to="sherry" spy={true} smooth={true} duration={800}>
            Sherry
          </Link>
        </li_4>
        <li_5 onClick={toggle}>
          <Link to="ada" spy={true} smooth={true} duration={800}>
            Ada
          </Link>
        </li_5>
        <li_6 onClick={toggle}>
          <Link to="mrx" spy={true} smooth={true} duration={800}>
            Mr-X
          </Link>
        </li_6>
        <li_7 onClick={toggle}>
          <Link to="annete" spy={true} smooth={true} duration={800}>
            Annete
          </Link>
        </li_7>
        <li onClick={toggle}>
          <Link to="biowilliam" spy={true} smooth={true} duration={800}>
            Biografia
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="videos" spy={true} smooth={true} duration={800}>
            Vídeos
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="details" spy={true} smooth={true} duration={800}>
            Detalhes
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="gallery" spy={true} smooth={true} duration={800}>
            Galeria
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
