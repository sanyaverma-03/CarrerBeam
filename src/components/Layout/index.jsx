import Navbar from "../compounds/Navbar";
import SideBar from "../compounds/Sidebar";

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <div
          style={{
            display: "flex",
          }}
        >
          <SideBar />
          {children}
        </div>
      </>
    )
}

export default Layout;