/* eslint-disable no-unused-vars */

import styles from "../Button/Button.module.scss";

const Button = ({ outline, big, large_font, children, onClick, to }) => {
 

  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className={`${styles.button} ${outline ? styles.outline : ""} ${
        big ? styles.big : ""
      } ${large_font ? styles.large_font : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
