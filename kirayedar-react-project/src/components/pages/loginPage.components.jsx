import React from "react";
import Button from "../button.components";

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
              <label className="mb-2" Htmlfor="email">
                Email:
              </label>
              <input
                style={{ width: "400px" }}
                id="email"
                type="email"
                placeholder="Email"
                value=""
              />
            </div>
            <div
              className="row"
              style={{
                position: "absolute",
                top: "120px",
                left: "50px",
                value: 0,
              }}
            >
              <label className="mb-2" Htmlfor="password">
                Password:
              </label>
              <input
                style={{ width: "400px" }}
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
        </form>

        <div
          style={{
            position: "absolute",
            top: "180px",
            left: "130px",
          }}
        >
          <Button />
        </div>
        <span
          style={{
            position: "absolute",
            top: "250px",
            left: "150px",
          }}
        >
          <h6>Haven't signed up yet?</h6>
        </span>
      </div>
    </>
  );
};

export default LoginPage;
