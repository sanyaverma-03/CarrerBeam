import styles from "./index.module.css";

const SideBar = () => {
  return (
    <>
      <div className={styles.SideContainer}>
        <div>
          <img src="../../src/assets/card1.png" />
        </div>
        <div>
          <p style={{
            fontFamily:"Inter",
            fontWeight:"bold",
            fontSize:"1.5rem",
            marginBottom:"0.5rem"
          }}>Ascend Beyond</p>
          <p style={{
            fontFamily:"Inter",
            fontWeight:"400",
            fontSize:"1rem",
            color:"#5D7290"
          }}>Career Beam</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
