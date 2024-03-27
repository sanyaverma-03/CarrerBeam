import styles from "./index.module.css";
import AppHeader from "../App_Header";
import InputBox from "../../atoms/InputBox";
import DropDown from "../../atoms/DropDown";
import RadioBtn from "../../atoms/RadioBtn1";
import RadioBtn2 from "../../atoms/RadioBtn2";
import InputBox2 from "../../atoms/InputBox2";
import Button1 from "../../atoms/button1";

const StudentLogin = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginBottom: "5rem",
        }}
      >
        <AppHeader />
        <div
          style={{
            width: "52rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginLeft: "3rem",
          }}
        >
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <InputBox
              text={"Which school/college are you studying in?"}
              placeholderText={"College Name"}
            />
            <InputBox
              text={"What course are you studying?"}
              placeholderText={"Management Studies/Accounting and etc."}
            />
          </div>
          <div style={{ display: "flex", gap: "3rem" }}>
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
          <div style={{ display: "flex", gap: "2.8rem" }}>
            <InputBox
              text={"What are your passions and interest?"}
              placeholderText={"Painting,Writing,Sporting,etc."}
            />
            <RadioBtn
              text={
                "Would you be interested in volunterring at Carribean Festival?"
              }
              opt1={"Yes"}
              opt2={"No"}
            />
          </div>
          <RadioBtn2
            text={"Which days would you be attending ASCend Beyond? "}
            opt1={"4th May"}
            opt2={"5th May"}
            opt3={"4th & 5th May"}
          />
          <InputBox2
            text={
              "What are the biggest concerns or challenges you have faced when it comes to education? "
            }
            placeholderText={"Confusing choices in career selection.."}
          />
          <InputBox2
            text={
              "What topics would you like to see covered in CareerBeam festival ?"
            }
            placeholderText={"AI, Military, Coding"}
          />
          <Button1 style={{ width: "10rem" }} text={"Submit Form"} />
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
