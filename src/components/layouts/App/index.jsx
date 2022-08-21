import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/App";
import Login from "../../../pages/App/auth/Login";
import Registration from "../../../pages/App/auth/Registration";
import Doctors from "../../../pages/App/doctors";
import DoctorProfile from "../../../pages/App/doctors/DoctorProfile";
import Footer from "../../app/Footer";
import Navbar from "../../app/Navbar";
import Loader from "./loader";
const index = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="login" element={<Registration />} />
            <Route path="doctors">
              <Route index element={<Doctors />} />
              <Route path=":slug" element={<DoctorProfile />} />
            </Route>
          </Route>
        </Routes>
      </div>
      <Footer />
    </Suspense>
  );
};

export default index;
