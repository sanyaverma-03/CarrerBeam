import styles from "./index.module.css";
import Header from "../../compounds/Header";
import InputBox from "../../atoms/InputBox";
import DropDown from "../../atoms/DropDown";

const AppHeader = () => {
  return (
    <>
      <div className={styles.VerContainer}>
        <Header />
        <div
          style={{
            display: "flex",
            gap: "3rem",
          }}
        >
          <InputBox
            text={"Name"}
            email={"*"}
            placeholderText={"Khushi Mehta"}
          />
          <InputBox
            text={"Contact number (Kindly add your whatsapp number)"}
            email={"*"}
            placeholderText={"+91 9876543210"}
          />
        </div>
        <DropDown
          text={"Who am I?"}
          opt1={"Student"}
          opt2={"Faculty"}
          opt3={"Parents"}
        />
      </div>
    </>
  );
};

export default AppHeader;
