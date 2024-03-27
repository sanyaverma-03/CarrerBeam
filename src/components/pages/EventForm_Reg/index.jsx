import Navbar from "../../compounds/Navbar";
import SideBar from "../../compounds/Sidebar";
import Verification from "../../molecules/Content_Verfication";
import OtpVerification from "../../molecules/Otp_Verification";
import AppHeader from "../../molecules/App_Header";
import StudentLogin from "../../molecules/Student_Login";

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
        <StudentLogin />
      </div>
    </>
  );
};

export default EventFormVerification;
