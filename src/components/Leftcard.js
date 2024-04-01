import styles from "./Leftcard.module.css";
import React from "react";

function Leftcard() {
  return (
    <div className={styles.leftcard}>
      <div className={styles.leftcardcontent}>
        <div className={styles.uppercont}>
          <div className={styles.leftcardlogo}></div>
          <h1 className={styles.leftcardheading}>
            You're{" "}
            <span>
              {" "}
              <b>almost</b>{" "}
            </span>
            there
          </h1>
          <p className={styles.leftcardtext}>
            To continue, please agree to our <a href="#">Terms of Service</a>{" "}
            and acknowledge our <a href="#">Privacy Policy</a>
          </p>
        </div>
        <div className={styles.buttonbox}>
          <button className={`${styles.leftcardbutton} btn btn-primary`}>
            I agree
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leftcard;
