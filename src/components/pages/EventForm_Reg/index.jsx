import Navbar from "../../compounds/Navbar";
import SideBar from "../../compounds/Sidebar";
import Verification from "../../molecules/Content_Verfication";
import OtpVerification from "../../molecules/Otp_Verification";
import AppHeader from "../../molecules/App_Header";
import StudentLogin from "../../molecules/Student_Login";
import FacultyLogin from "../../molecules/Faculty_Login";
import ParentsLogin from "../../molecules/Parents_Login";
import OthersLogin from "../../molecules/Others_Login";

const EventFormVerification = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBar />
        {/* <Verification /> */}
        {/* <OtpVerification /> */}
        {/* <AppHeader /> */}
        {/* <StudentLogin /> */}
        {/* <FacultyLogin /> */}
        {/* <ParentsLogin /> */}
        <OthersLogin />
      </div>
    </>
  );
};

export default EventFormVerification;
