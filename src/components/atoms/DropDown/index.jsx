import styles from "./index.module.css";

const DropDown = ({ text, options, onSelect }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      <label
        style={{
          fontFamily: "Rubik",
          fontWeight: "400",
          fontSize: "1rem",
          color: "#1E1E2F",
        }}
      >
        {text} <span style={{ color: "red", fontWeight: "bold" }}>*</span>
      </label>
      <select id="dropdown" name="dropdown" className={styles.DropInput} onChange={onSelect}>
        {options && options.map((option, idx) => (
          <option value={option} className={styles.DropOptions} key={idx}>
            {option?.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
