import React from "react";

export default function HeaderComponent() {
  return (
    <nav
      className="navbar bg-primary"
      style={{ width: "100vw", height: "70px", position: "relative" }}
    >
      <div className="container-fluid">
        <img
          src="https://st.depositphotos.com/2808409/3926/v/380/depositphotos_39264255-stock-illustration-flat-house-icon-background.jpg?forcejpeg=true"
          style={{
            width: "50px",
            position: "absolute",
            top: "15px",
            left: "30px",
          }}
        />
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
    </nav>
  );
}
