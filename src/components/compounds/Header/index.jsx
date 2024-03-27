import styles from "./index.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.VerContainer}>
        <p
          style={{
            fontFamily: "Rubik",
            fontWeight: "400",
            fontSize: "2.5rem",
            lineHeight: "3rem",
            color: "#1E1E2F",
            marginBottom: "3rem",
          }}
        >
          Event Registeration
        </p>
        <div
          style={{
            display: "flex",
            gap: "5rem",
          }}
        >
          <p className={styles.ParaText}>Email Verification</p>
          <p className={styles.ParaText}>Application Form</p>
        </div>
      </div>
    </>
  );
};

export default Header;
