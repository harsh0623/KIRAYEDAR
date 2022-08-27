import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [useInfo, setInfo] = useState({
    email: null,
    password: null,
  });
  const HandleInputChange = (event) => {
    setInfo({ [event.target.id]: event.target.value });
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "cal(100vh-70px)" }}
      >
        {" "}
        <div
          className="card mt-5"
          style={{
            width: "30vw",
            paddingBottom: "20px",
            paddingTop: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <div className="container">
            <div className="row justify-content-center ms-2">
              <span
                className="fw-bold "
                style={{
                  fontSize: "30px",
                  width: "150px",
                  color: "#2D3A86",
                }}
              >
                Log In
              </span>
            </div>
            <form onSubmit={HandleInputChange}>
              <div className="form-group">
                <div className="row">
                  <label className="mb-1" htmlFor="email">
                    <b>Email:</b>
                  </label>
                  <input
                    style={{ width: "350px" }}
                    id="email"
                    type="email"
                    placeholder="Email"
                    onChange={HandleInputChange}
                  />
                </div>
                <div className="row">
                  <label className="mt-2" htmlFor="password">
                    <b>Password:</b>
                  </label>
                  <input
                    className="mt-1"
                    style={{ width: "350px" }}
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={HandleInputChange}
                  />
                </div>
              </div>
            </form>
            <div className="row justify-content-center">
              <button
                type="submit"
                className="btn btn-primary mt-4"
                style={{ width: "200px" }}
              >
                Log In
              </button>
            </div>
            <div>
              <hr
                className="fw-bold justify-content-center"
                style={{
                  width: "18vw",
                  marginLeft: "48px",
                }}
              ></hr>
            </div>
            <div className="row">
              <span className="text-center">
                <h6>Haven't signed up yet?</h6>
              </span>
            </div>
            <div className="row justify-content-center">
              <span className="d-flex justify-content-center ">
                <Link to="/SignUp">
                  <button
                    type="submit"
                    className="btn btn-primary "
                    style={{ width: "120px" }}
                  >
                    Sign Up
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
