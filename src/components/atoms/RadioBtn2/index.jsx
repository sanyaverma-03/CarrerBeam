import styles from "./index.module.css";

const RadioBtn2 = ({ text, opt1, opt2, opt3 }) => {
  return (
    <>
      <div>
        <label
          style={{
            fontFamily: "Rubik",
            fontWeight: "400",
            fontSize: "1rem",
            color: "#1E1E2F",
          }}
        >
          {text}
        </label>
        <br />
        <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <input type="radio" id="option1" name="options" value="option1" />
            <label style={{ fontWeight: "500" }} for="option1">
              {opt1}
            </label>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <input type="radio" id="option2" name="options" value="option2" />
            <label style={{ fontWeight: "500" }} for="option2">
              {opt2}
            </label>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <input type="radio" id="option2" name="options" value="option2" />
            <label style={{ fontWeight: "500" }} for="option2">
              {opt3}
            </label>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default RadioBtn2;
