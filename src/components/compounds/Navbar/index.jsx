import { useState } from "react";
import styles from "./index.module.css";

const CrossIcon = ({onClick}) => {
  return (
    <div className={styles.crossIcon} onClick={onClick}>
      <div></div>
      <div></div>
    </div>
  );
};

const MobileNav = ({setShowNav}) => {
  return (
    <div className={styles.mobileNavContainer}>
      <CrossIcon onClick={()=>setShowNav(false)} />
      <div className={styles.text}>Home</div>
      <div className={styles.text}>About Us</div>
      <div className={styles.text}>Contact Us</div>
      <div className={styles.text}>Events v</div>
    </div>
  );
};

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className={styles.navContainer}>
      <div className={styles.mainContainer}>
        <div
          style={{
            marginLeft: "2rem",
          }}
        >
          <img src="../../src/assets/CbLogo.png" />
        </div>
        <div className={styles.secondaryContainer}>
          <p className={styles.text}>Home</p>
          <p className={styles.text}>About Us</p>
          <p className={styles.text}>Contact Us</p>
          <p className={styles.text}>Events v</p>
        </div>

        <div className={styles.menuIcon} onClick={() => setShowNav(true)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {showNav && <MobileNav setShowNav={setShowNav}/>}
      </div>
    </div>
  );
};

export default Navbar;
