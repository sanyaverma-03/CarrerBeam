import styles from "./index.module.css";

const InputBox2 = ({ text, placeholderText, email }) => {
  return (
    <div>
      <p
        style={{
          fontFamily: "Rubik",
          fontWeight: "400",
          fontSize: "1rem",
          color: "#1E1E2F",
          marginBottom: "0.5rem",
        }}
      >
        {text}
        <a style={{ textDecoration: "none", color: "#173D7A" }} href="email">
          {email}
        </a>
      </p>
      <input
        type="text"
        placeholder={placeholderText}
        className={styles.InputBox}
      ></input>
    </div>
  );
};

export default InputBox2;
