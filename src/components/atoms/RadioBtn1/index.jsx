const RadioBtn = ({ text, options }) => {
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
          {options.map((option, idx) => (
            <div key={idx} style={{ display: "flex", gap: "0.5rem" }}>
              <input type="radio" id={option} name="options" value={option} />
              <label>{option}</label>
            </div>
          ))}
          <br />
        </div>
      </div>
    </>
  );
};

export default RadioBtn;
