import styles from "./Navbar.module.css";
import { BsCaretDownFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";

function Navbar() {
  return (
    <nav className={styles.mainbar}>
      <div className={styles.logo}></div>
      {/* <div className={styles.threelines}>
        <FaEllipsisV color="white" size="30px" />
      </div> */}
      <div className={styles.linkcontainer}>
        <span className={`${styles.navbarele} btn btn-light`}>
          <a href="#">Pricing</a>
        </span>

        <span
          className={`${styles.navbarele} btn btn-light ${styles.features}`}
        >
          <a href="#">Features</a>
          <FaAngleDown color="black" />
        </span>

        <span className={`${styles.navbarele} btn btn-light`}>
          <a href="#">Company</a>
        </span>

        <span className={`${styles.navbarele} btn btn-light`}>
          <a href="#">Help</a>
        </span>

        <span className={`${styles.navbarele} btn btn-light`}>
          <a href="#">Sign up</a>
        </span>

        <span className={`${styles.navbarele} btn btn-light`}>
          <a href="#">Log in</a>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
