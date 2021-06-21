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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="//Projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
