import Navbar from "../../compounds/Navbar";
import mumbaiImg from "../../../assets/Mumbai.png";
import styles from "./index.module.css";

const data = {
  heading: "Workshop",
  colHeading: ["Topic Name", "Time"],
  data: [
    ["Adding creativity", "10:30am-11:39am"],
    ["Decode your dreams", "11:20am- 12:00pm"],
  ],
};

const TopBox = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgba(3, 129, 200, 1)",
      }}
    >
      <div
        style={{
          width: "60%",
          padding: "2rem",
        }}
      >
        <p
          style={{
            fontSize: "2.5rem",
            color: "white",
            fontFamily: "Rubik",
          }}
        >
          Event Schedule
        </p>

        <p
          style={{
            fontSize: "1rem",
            color: "white",
            fontFamily: "Rubik",
            width: "70%",
            marginTop: "1rem",
          }}
        >
          Hall No-07, NESCO, Goregaon (East), Mumbai, Maharashtra 400063
        </p>
      </div>
      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <img
          src={mumbaiImg}
          alt="Event Schedule"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div style={{
        padding:"1rem"
    }}>
      <div className={styles.table}>
        <p className={styles.workshop}>{data.heading}</p>
        <div className={styles.row}>
            {data.colHeading.map((col, idx) => (
                <p key={idx}>{col}</p>

            ))}
        </div>

        {
        data.data.map((row, idx) => (
            <div className={styles.row} key={idx}>
                {row.map((col, idx) => (
                    <p key={idx}>{col}</p>
                ))}
            </div>
        ))}
      </div>
    </div>
  );
};

const EventSchedule = () => {
  return (
    <div>
      <Navbar />
      <TopBox />
      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <Table />
      </div>
    </div>
  );
};

export default EventSchedule;
