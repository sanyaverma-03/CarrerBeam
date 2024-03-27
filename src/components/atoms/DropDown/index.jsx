import styles from "./index.module.css";

const DropDown = ({ text, opt1, opt2, opt3,opt4 }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <label
          for="dropdown"
          style={{
            fontFamily: "Rubik",
            fontWeight: "400",
            fontSize: "1rem",
            color: "#1E1E2F",
          }}
        >
          {text} <span style={{ color: "red", fontWeight: "bold" }}>*</span>
        </label>
        <select id="dropdown" name="dropdown" className={styles.DropInput}>
          <option value="option1" className={styles.DropOptions}>
            {opt1}
          </option>
          <option value="option2" className={styles.DropOptions}>
            {opt2}
          </option>
          <option value="option3" className={styles.DropOptions}>
            {opt3}
          </option>
          <option value="option3" className={styles.DropOptions}>
            {opt4}
          </option>
        </select>
      </div>
    </>
  );
};

export default DropDown;
