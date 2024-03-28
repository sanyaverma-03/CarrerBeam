import styles from "./index.module.css";
import InputBox from "../../atoms/InputBox";

const Footer = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.flex1}>
          <div
            style={{
              display: "flex",
              padding: "3rem",
              marginLeft: "15rem",
              gap: "5rem",
            }}
          >
            <div>
              <p
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontFamily: "Rubik",
                  fontWeight: "200",
                  marginBottom: "2rem",
                }}
              >
                About Company
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.2rem" }}>
                  <img src="../../src/assets/Location.svg" />
                  <p className={styles.para}>
                    Vigor launchPad, Suit 3, 4th Floor, Samruddhi Venture
                    <p className={styles.para}>
                      Park, MIDC Central Rd, Andheri East, Mumbai - 400093
                    </p>
                  </p>
                </div>
                <div style={{ display: "flex", gap: "0.2rem" }}>
                  <img src="../../src/assets/Phone.svg" />
                  <p className={styles.para}>7208070768 | 022 4978 2431</p>
                </div>
                <div style={{ display: "flex", gap: "0.2rem" }}>
                  <img src="../../src/assets/Group.svg" />
                  <p className={styles.para}>equiry@vigorlaunchpad.com</p>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    fontFamily: "Rubik",
                    fontWeight: "200",
                    marginBottom: "1.4rem",
                  }}
                >
                  Let's Connect
                </p>
                <div style={{ display: "flex" }}>
                  <InputBox
                    text={""}
                    placeholderText={"Hello"}
                    style={{
                      backgroundColor: "#1E68A0",
                      borderRadius: "0px",
                      border: "1px solid #1E68A0",
                      outline: "none",
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "rgb(253, 223, 23)",
                      width: "4rem",
                      height: "2.8rem",
                      marginTop: "0.5rem",
                      borderRadius: "0px 4px 4px 0px",
                    }}
                  >
                    <img
                      style={{ padding: "0.4rem 1rem" }}
                      src="../../src/assets/Vector.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flex2}>
          <div style={{ marginTop: "1.5rem" }}>
            <p style={{ color: "#A5A5A5" }}>© 2024 . All Rights Reserved.</p>
          </div>
          <div style={{ display: "flex", gap: "2rem", marginTop: "1.5rem" }}>
            <div>
              <p style={{ color: "#A5A5A5" }}>FACEBOOK</p>
            </div>
            <div>
              <p style={{ color: "#A5A5A5" }}>TWITTER</p>
            </div>
            <div>
              <p style={{ color: "#A5A5A5" }}>INSTAGRAM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
