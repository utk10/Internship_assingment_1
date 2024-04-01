import styles from "./Rightcard.module.css";
import React from "react";

function Rightcard() {
  return (
    <div className={styles.rightcard}>
      <h4 className={styles.heading1}>Welcome to WeTransfer</h4>
      <p className={styles.text1}>
        Transfer ideas. <br></br>
        <b>Transfrom the world</b>
      </p>
      <h5 className={styles.heading2}>
        By accepting our cookies, you directly help us to expand our pledge to
        the planet. This year alone, WeTransfer has committed to planting over
        175,000 trees, and we’re just getting started. You’ll have a positive
        impact by simply experiencing our award-winning ads.
      </h5>
      <h6 className={styles.heading3}>
        Our website uses cookies to improve performance, service, and to better
        understand your needs. By accepting our third-party cookies, we and our
        partners are able to offer you more relevant advertising on and outside
        of our website(s) and apps. Learn more about our Privacy Policy.
      </h6>

      <div className={styles.buttoncontainer}>
        <button class={`btn btn-primary ${styles.accept}`} type="submit">
          I accept
        </button>
        <button class={`btn btn-primary ${styles.mgcook}`} type="submit">
          Manage cookies
        </button>
        <button type="button" class={`btn btn-primary ${styles.linking}`}>
          No thanks
        </button>
      </div>
    </div>
  );
}

export default Rightcard;
