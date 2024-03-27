import styles from "./index.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div
          style={{
            marginLeft: "5rem",
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
      </div>
    </>
  );
};

export default Navbar;
