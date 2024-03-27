import styles from "./index.module.css";
import AppHeader from "../App_Header";
import InputBox from "../../atoms/InputBox";
import DropDown from "../../atoms/DropDown";

const StudentLogin = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column",gap:"2rem" }}>
        <AppHeader />
        <div style={{ display: "flex", gap: "1.5rem", marginLeft: "3rem" }}>
          <InputBox
            text={"Which school/college are you studying in?"}
            placeholderText={"College Name"}
          />
          <InputBox
            text={"What course are you studying?"}
            placeholderText={"Management Studies/Accounting and etc."}
          />
        </div>
        <div style={{ display: "flex", gap: "1.5rem", marginLeft: "3rem" }}>
          <DropDown
            text={"Which year are you studying in?"}
            opt1={"Select one"}
            opt2={"2024"}
            opt3={"2023"}
          />
          <DropDown
            text={"Which courses excite you?"}
            opt1={"Select one"}
            opt2={"ex1"}
            opt3={"ex2"}
          />
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
