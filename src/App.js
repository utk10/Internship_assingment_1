import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";
import Mainpagecont from "./components/Mainpagecont";

function App() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.bgcontainer}>
        <Navbar />
        <Mainpagecont />
      </div>
    </div>
  );
}

export default App;
