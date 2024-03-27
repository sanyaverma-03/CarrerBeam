import styles from "./index.module.css";
import Header from "../../compounds/Header";
import InputBox from "../../atoms/InputBox";
import Button1 from "../../atoms/button1";

const OtpVerification = () => {
  return (
    <>
      <div className={styles.VerContainer}>
        <Header />
        <InputBox
          text={"The OTP has been sent to "}
          email={"example@gmail.com."}
          placeholderText={"Enter OTP"}
        />
        <Button1 text={"Verify"} />
        <p
          style={{
            color: "#173D7A",
            fontFamily: "Rubik",
            fontSize: "0.9rem",
          }}
        >
          Resend OTP
          <span style={{ color: "black" }}> or </span> Change Email ID
        </p>
      </div>
    </>
  );
};

export default OtpVerification;
