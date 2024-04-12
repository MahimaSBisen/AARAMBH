import Header from "../Components/Header";
import Footer from "../Components/Footer";
import styles from "./Output.module.css";

function Output() {
  return <>
       <div className={styles.mainDiv}>
          <h1 className={styles.head}>Recommendation</h1>
          <hr/>
          <div className={styles.outputDiv}>
            <p className={styles.para}>Based on the information provided in your Organ Donor Registration, we recommend that you are eligible for organ donation.</p>
            <p className={styles.para}>Become an organ donor and contribute to our nation.Thank you for being a part of our Organ Donation Team.</p>
          </div>
       </div>

  </>
}

export default Output;