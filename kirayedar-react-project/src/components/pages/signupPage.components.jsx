import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const test = () => "";
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:"cac(100vh-100px)"}}>
      <div
        className="card mt-5"
        style={{
          width: "35vw",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
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
          <form onSubmit={test}>
            <div className="form-group">
              <div className="row justify-content-start ms-4">
                <label htmlFor="Fname" style={{}}>
                  <b>First Name*</b>
                </label>
                <input
                  style={{
                    width: "46%",
                  }}
                  type="text"
                  placeholder="First Name"
                  id="Fname"
                  onChange={test}
                />
                <label
                  htmlFor="Lname"
                  style={{ position: "absolute", top: "45px", left: "48%" }}
                >
                  <b>Last Name*</b>
                </label>
                <input
                  style={{
                    width: "40%",
                    position: "absolute",
                    top: "70px",
                    left: "51%",
                  }}
                  type="text"
                  placeholder="Last Name"
                  id="Lname"
                  onChange={test}
                />
              </div>
              <div
                className="row justify-content-center"
                
              >
                <label className="mb-1 mt-2 fw-bold" htmlFor="email" style={{marginLeft:"70px"}}>
                  Email Address*
                </label>
                <input
                  style={{ width: "450px" }}
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={test}
                />
              </div>
              <div
                className="row justify-content-center"
                style={{
                 
                }}
              >
                <label className="mb-1 mt-2 fw-bold" htmlFor="password" style={{marginLeft:"70px"}}>
                  Password*
                </label>
                <input
                  style={{ width: "450px" }}
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={test}
                />
              </div>
            </div>
          </form>
          
          <div
            className="row fw-bold mt-2"
          >
            <input type="checkbox" id="check" value="Check" onChange={test}  />{" "}
           <span className="text-end"> By Signing Up you agree to our Terms and Conditions.</span>
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
                width: "300px",
                marginLeft: "115px",
              }}
            ></hr>
          </div>
          <div
            className="row fw-bold mb-2"
            style={{
             marginLeft:"180px"
            }}
          >
            Already Signed Up?
            <div
              style={{
                marginLeft: "40px",
              }}
            >
              <Link to="/">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
