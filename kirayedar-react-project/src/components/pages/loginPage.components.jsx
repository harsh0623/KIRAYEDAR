import React from "react";
import { Link } from "react-router-dom";
import SignUpPage from "./signupPage.components";
const LoginPage = () => {
  const test = () => "";
  return (
    <>
      {" "}
      <div
        className="card"
        style={{
          width: "35%",
          height: "50vh",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "100px",
          position: "relative",
        }}
      >
        <span
          className="fw-bold"
          style={{
            fontSize: "30px",
            width: "100px",
            color: "#2D3A86",
            position: "absolute",
            top: "3px",
            left: "180px",
          }}
        >
          Log In
        </span>
        <form onSubmit={test}>
          <div className="form-group">
            <div
              className="row"
              style={{
                position: "absolute",
                top: "40px",
                left: "50px",
              }}
            >
              <label className="mb-2" htmlFor="email">
                <b>Email:</b>
              </label>
              <input
                style={{ width: "400px" }}
                id="email"
                type="email"
                placeholder="Email"
                value=""
                onChange={test}
              />
            </div>
            <div
              className="row"
              style={{
                position: "absolute",
                top: "120px",
                left: "50px",
              }}
            >
              <label className="mb-2" htmlFor="password">
                <b>Password:</b>
              </label>
              <input
                style={{ width: "400px" }}
                type="password"
                id="password"
                placeholder="Password"
                value=""
                onChange={test}
              />
            </div>
          </div>
        </form>

        <div
          style={{
            position: "absolute",
            top: "170px",
            left: "130px",
          }}
        >
          <button
            type="submit"
            className="btn btn-primary mt-4"
            style={{ width: "200px" }}
          >
            Log In
          </button>
        </div>
        <span
          style={{
            position: "absolute",
            top: "240px",
            left: "150px",
          }}
        >
          <h6>Haven't signed up yet?</h6>
        </span>
        <span
          style={{
            position: "absolute",
            top: "240px",
            left: "180px",
          }}
        >
          <Link to="/SignUp">
            <button
              type="submit"
              className="btn btn-primary mt-4"
              style={{ width: "100px" }}
            >
              Sign Up
            </button>
          </Link>
        </span>
      </div>
    </>
  );
};

export default LoginPage;