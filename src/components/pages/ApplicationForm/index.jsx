import { useState } from "react";
import Layout from "../../Layout";
import AppHeader from "../../molecules/App_Header";
import StudentLogin from "../../molecules/Student_Login";
import FacultyLogin from "../../molecules/Faculty_Login";
import ParentsLogin from "../../molecules/Parents_Login";

const ApplicationForm = () => {
  const [status, setStatus] = useState("student");

  return (
    <Layout>
      <div>
        <AppHeader setStatus={setStatus} />
        {status === "student" && <StudentLogin />}
        {status === "faculty" && <FacultyLogin />}
        {status === "parent" && <ParentsLogin />}
      </div>
    </Layout>
  );
};

export default ApplicationForm;
