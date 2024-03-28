import styles from "./index.module.css";
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
          marginBottom: "5rem",
          marginTop: "2rem",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div className={styles.flex}>
            <div className={styles.width50}>
              <InputBox
                text={"Which school/college are you studying in?"}
                placeholderText={"College Name"}
              />
            </div>
            <div className={styles.width50}>
              <InputBox
                text={"What course are you studying?"}
                placeholderText={"Management Studies/Accounting and etc."}
              />
            </div>
          </div>

          <div className={styles.flex}>
            <div className={styles.width50}>
              <DropDown
                text={"Which year are you studying in?"}
                options={["Select one", "2024", "2023"]}
              />
            </div>

            <div className={styles.width50}>
              <DropDown
                text={"Which courses excite you?"}
                options={["Select one", "ex1", "ex2"]}
              />
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.width50}>
              <InputBox
                text={"What are your passions and interest?"}
                placeholderText={"Painting,Writing,Sporting,etc."}
              />
            </div>
            <div className={styles.width50}>
              <RadioBtn
                text={
                  "Would you be interested in volunterring at Carribean Festival?"
                }
                options={["Yes", "No"]}
              />
            </div>
          </div>
          <RadioBtn2
            text={"Which days would you be attending ASCend Beyond? "}
            options={["4th May", "5th May", "4th & 5th May"]}
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
