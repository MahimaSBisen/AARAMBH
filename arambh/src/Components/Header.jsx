import myImage from "../Images/LogoOD1.png"; // Importing the image
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <img src={myImage} alt="My Image" />

        <Link className={styles.link} to='/'>
          <h3 className={styles.para}>Home</h3>
        </Link>


        <Link className={styles.link} to='sign-up'>
          <h3 className={styles.para}>Sign Up</h3>
        </Link>


        <Link className={styles.link} to='log-in'>
          <h3 className={styles.para}>Log In</h3>
        </Link>

        <Link  className={styles.link} to='faq'>
          <h3 className={styles.para}>FAQs</h3>
        </Link>

        <Link  className={styles.link} to='regis-form'>
          <h3 className={styles.para}>Donate Organs</h3>
        </Link>


        <div class={styles.btngroup}>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>



      </div>




    </>
  );
}

export default Header;
