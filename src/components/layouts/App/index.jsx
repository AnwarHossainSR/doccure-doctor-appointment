import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/App";
import Doctors from "../../../pages/App/doctors";
import DoctorProfile from "../../../pages/App/doctors/DoctorProfile";
import Footer from "../../app/Footer";
import Navbar from "../../app/Navbar";
const index = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="doctors">
              <Route index element={<Doctors />} />
              <Route path=":slug" element={<DoctorProfile />} />
            </Route>
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default index;
