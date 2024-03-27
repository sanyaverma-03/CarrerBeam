import styles from "./index.module.css";

const CheckBox = ({ text, opt1, opt2, opt3 }) => {
  return (
    <>
      <div>
        <label>{text}</label>
        <br />
        <input type="radio" id="option1" name="options" value="option1" />
        <label for="option1">{opt1}</label>
        <br />

        <input type="radio" id="option2" name="options" value="option2" />
        <label for="option2">{opt2}</label>
        <br />

        <input type="radio" id="option3" name="options" value="option3" />
        <label for="option3">{opt3}</label>
        <br />
      </div>
    </>
  );
};

export default CheckBox;
