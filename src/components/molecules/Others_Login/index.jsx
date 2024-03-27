import styles from "./index.module.css";
import AppHeader from "../App_Header";
import RadioBtn2 from "../../atoms/RadioBtn2";
import InputBox2 from "../../atoms/InputBox2";
import Button1 from "../../atoms/button1";

const OthersLogin = () => {
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
          <InputBox2
            text={"What made you interested in CareerBeam Festival?"}
            placeholderText={"The workshop topics etc"}
          />
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

export default OthersLogin;
