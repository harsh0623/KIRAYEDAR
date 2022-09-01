import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  let [signUpInfo, setInfo] = useState({
    fname: null,
    lname: null,
    email: null,
    password: null,
  });
  const InputChange = (event) => {
    setInfo({ [event.target.id]: event.target.value });
  };
  console.log(signUpInfo);
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "cal(100vh-100px)" }}
    >
      <div
        className="card mt-5"
        style={{
          width: "35vw",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="container">
          <div className="row justify-content-center ms-4">
            <span
              className="fw-bold"
              style={{
                fontSize: "30px",
                width: "200px",
                color: "#2D3A86",
              }}
            >
              Sign Up
            </span>
          </div>
          <form onSubmit={InputChange}>
            <div className="form-group">
              <div className="row justify-content-start ms-1">
                <label htmlFor="fname">
                  <b>First Name*</b>
                </label>
                <input
                  style={{
                    width: "46%",
                  }}
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  value={signUpInfo.fname}
                  onChange={InputChange}
                />
                <label
                  htmlFor="lname"
                  style={{ position: "absolute", top: "45px", left: "48%" }}
                >
                  <b>Last Name*</b>
                </label>
                <input
                  style={{
                    width: "46%",
                    position: "absolute",
                    top: "70px",
                    left: "51%",
                  }}
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  value={signUpInfo.lname}
                  onChange={InputChange}
                />
              </div>
              <div className="row justify-content-center">
                <label
                  className="mb-1 mt-2 fw-bold"
                  htmlFor="email"
                  style={{ marginLeft: "20px" }}
                >
                  Email Address*
                </label>
                <input
                  style={{ width: "450px" }}
                  id="email"
                  type="email"
                  value={signUpInfo.email}
                  placeholder="Email Address"
                  onChange={InputChange}
                />
              </div>
              <div className="row justify-content-center">
                <label
                  className="mb-1 mt-2 fw-bold"
                  htmlFor="password"
                  style={{ marginLeft: "20px" }}
                >
                  Password*
                </label>
                <input
                  style={{ width: "450px" }}
                  type="password"
                  id="password"
                  value={signUpInfo.password}
                  placeholder="Password"
                  onChange={InputChange}
                />
              </div>
            </div>
          </form>

          <div className="row fw-bold ">
            <input
              type="checkbox"
              id="check"
              value="Check"
              style={{ position: "relative", top: "20px", right: "193px" }}
            />{" "}
            <span className="text-end">
              {" "}
              By Signing Up you agree to our Terms and Conditions.
            </span>
          </div>
          <div className="row justify-content-center ">
            <button
              type="submit"
              className="btn btn-primary mt-2"
              style={{ width: "150px" }}
            >
              Sign Up
            </button>
          </div>
          <div>
            <hr
              className="fw-bold"
              style={{
                marginTop: "10px",
                width: "25vw",
                marginLeft: "50px",
              }}
            ></hr>
          </div>
          <div
            className="row fw-bold mb-2"
            style={{
              marginLeft: "130px",
            }}
          >
            Already Signed Up?
            <NavLink
              to="/"
              style={{
                position: "absolute",
                left: "59%",
                width: "100px",
              }}
            >
              Log in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
