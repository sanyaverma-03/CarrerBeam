import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EmailLogin from "./components/pages/EmailLogin/index.jsx";
import VerifyOtp from "./components/pages/VerifyOtp/index.jsx";

import "./index.css";
import ApplicationForm from "./components/pages/ApplicationForm/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EmailLogin />,
  },
  {
    path: "/verify",
    element: <VerifyOtp />,
  },
  {
    path: "/appForm",
    element: <ApplicationForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
