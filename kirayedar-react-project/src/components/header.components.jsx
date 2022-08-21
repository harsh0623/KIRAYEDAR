import React from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <nav
      className="navbar bg-primary"
      style={{ width: "100vw", height: "70px", position: "relative" }}
    >
      <div className="container-fluid">
        <Link to="/">
          {" "}
          <img
            src="https://st.depositphotos.com/2808409/3926/v/380/depositphotos_39264255-stock-illustration-flat-house-icon-background.jpg?forcejpeg=true"
            style={{
              width: "50px",
              position: "absolute",
              top: "15px",
              left: "30px",
            }}
          />
        </Link>
        <span
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "25px",
            position: "absolute",
            top: "20px",
            left: "100px",
          }}
        >
          KIRAYAEDAR
        </span>
      </div>
      <Link to="/dashboard">
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "73%",
            color: "white",
            fontSize: "25px",
            textDecoration: "underline",
          }}
        >
          Dashboard
        </div>
      </Link>
      <Link to="/transactions">
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "86%",
            color: "white",
            fontSize: "25px",
            textDecoration: "underline",
          }}
        >
          Flats
        </div>
      </Link>
    </nav>
  );
}
