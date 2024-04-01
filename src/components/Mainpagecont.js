import Leftcard from "./Leftcard";
import Rightcard from "./Rightcard";
import styles from "./Mainpage.module.css";

function Mainpagecont() {
  return (
    <div className={styles.cardcontainer}>
      <Leftcard />
      <Rightcard />
    </div>
  );
}
export default Mainpagecont;
