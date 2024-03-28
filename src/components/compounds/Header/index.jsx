import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p className={styles.heading}>Event Registeration</p>
      <div className={styles.flex}>
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
