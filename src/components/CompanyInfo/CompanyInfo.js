import React from "react";
import Navbar from "../Navbar/Navbar";

const CompanyInfo = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div
        className="card d-block mx-auto mt-5 container"
        style={{ width: "20rem", margin: "30px" }}
      >
        <div
          className="justify-content-center align-items-center bookCard"
          style={{ backgroundColor: "#F1F1F1", borderRadius: "10px" }}
        ></div>
        <div className="card-body text-center">
          <h5 className="fw-bold">Company: Geeksynergy Technologies Pvt Ltd</h5>
          <p className="fw-bold">Address: Sanjayanagar, Bengaluru-56</p>
          <div className="d-flex justify-content-between align-items-center ">
            <span>
              <h5 className="">Phone:XXXXXXXXX09</h5>
              <h5>Email: XXXXXX@gmail.com</h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
