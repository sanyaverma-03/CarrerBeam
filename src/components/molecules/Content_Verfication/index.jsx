import styles from "./index.module.css";
import Button1 from "../../atoms/button1";
import InputBox from "../../atoms/InputBox";
import Header from "../../compounds/Header";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.VerContainer}>
      <Header />
      <InputBox
        text={"Email ID"}
        email={""}
        placeholderText={"Enter Email ID"}
      />
      <Button1 text={"Send OTP"} onClick={() => navigate("/verify")} />
    </div>
  );
};

export default Verification;
