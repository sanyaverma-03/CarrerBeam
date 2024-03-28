import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
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
        <p className={styles.ParaText} onClick={() => navigate("/")}>
          Email Verification
        </p>
        <p className={styles.ParaText} onClick={() => navigate("/appForm")}>
          Application Form
        </p>
      </div>
    </div>
  );
};

export default Header;
