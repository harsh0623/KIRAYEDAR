import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="col-3">
        <div
          className="card mt-3 ms-5"
          style={{ width: "80%", height: "30vh", position: "relative" }}
        >
          <span
            style={{
              position: "absolute",
              top: "20px",
              left: "60px",
              fontSize: "25px",
            }}
          >
            Rent Per Month
          </span>
          <span
            style={{
              position: "absolute",
              top: "50px",
              left: "60px",
              fontSize: "22px",
            }}
          >
            Rs.5000/-
          </span>
          <span
            style={{
              position: "absolute",
              top: "100px",
              left: "60px",
              fontSize: "25px",
            }}
          >
            Total Dues
          </span>
          <span
            style={{
              position: "absolute",
              top: "130px",
              left: "60px",
              fontSize: "22px",
            }}
          >
            Rs.3000/-
          </span>
        </div>
      </div>
      <div className="col-9">
        <table
          className="table"
          style={{
            width: "60%",
            position: "absolute",
            left: "30%",
          }}
        >
          <thead className="bg-primary">
            <tr>
              <th style={{ border: "1px solid black 2px" }}>Flats</th>
              <th style={{ border: "1px solid black" }}>Dues</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
