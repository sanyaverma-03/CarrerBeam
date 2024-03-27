import styles from "./index.module.css";
import Button1 from "../../atoms/button1";
import InputBox from "../../atoms/InputBox";
import Header from "../../compounds/Header";

const Verification = () => {
  return (
    <>
      <div className={styles.VerContainer}>
        <Header />
        <InputBox
          text={"Email ID"}
          email={""}
          placeholderText={"Enter Email ID"}
        />
        <Button1 text={"Send OTP"} />
      </div>
    </>
  );
};

export default Verification;
