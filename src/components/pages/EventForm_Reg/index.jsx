import Navbar from "../../compounds/Navbar";
import SideBar from "../../compounds/Sidebar";
import Verification from "../../molecules/Content_Verfication";
import OtpVerification from "../../molecules/Otp_Verification";

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
        {/* <Verification/> */}
        <OtpVerification />
      </div>
    </>
  );
};

export default EventFormVerification;
