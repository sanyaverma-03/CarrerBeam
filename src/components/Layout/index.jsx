import Navbar from "../compounds/Navbar";
import SideBar from "../compounds/Sidebar";
import styles from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.layoutContainer}>
        <SideBar />
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
