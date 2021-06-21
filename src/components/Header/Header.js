import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <h3>UlricTodman.com</h3>
      </div>

      <div>
        <ul className={styles["header-nav"]}>
          <li>
            <NavLink to="/react-portfolio/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/react-portfolio/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/react-portfolio/Projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/react-portfolio/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
