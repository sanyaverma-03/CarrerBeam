import styles from "./index.module.css";
import Header from "../../compounds/Header";
import InputBox from "../../atoms/InputBox";
import DropDown from "../../atoms/DropDown";

const AppHeader = ({ setStatus }) => {
  return (
    <div className={styles.VerContainer}>
      <Header />
      <div className={styles.flex}>
        <div className={styles.width50}>
          <InputBox
            text={"Name"}
            email={"*"}
            placeholderText={"Khushi Mehta"}
          />
        </div>
        <div className={styles.width50}>
          <InputBox
            text={"Contact number (Kindly add your whatsapp number)"}
            email={"*"}
            placeholderText={"+91 9876543210"}
          />
        </div>
      </div>
      <DropDown
        text={"Who am I?"}
        options={["student", "faculty", "parent", "others"]}
        onSelect={(e) => setStatus(e.target.value)}
      />
    </div>
  );
};

export default AppHeader;
