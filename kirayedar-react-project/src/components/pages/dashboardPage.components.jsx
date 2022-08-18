import React from "react";

const Dashboard = () => {
  const FlatDetails = [{
    flname: "Flor Enclave",
    RentDue: 3000
  },
    {
      flname: "Panchsheel",
      RentDue: 4000
    }]
  const Tdue = FlatDetails[0].RentDue + FlatDetails[1].RentDue;
  return (
    <>
      <div className="container fluid mt-4">
        <div className="row">
          <div className="col-4">
            <div
              className="card mt-5 "
              style={{
                width: "80%",
                height: "30vh",
                position: "relative",
                top: "10px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "90px",
                  fontSize: "18px",
                }}
              >
                Rent Per Month
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "50px",
                  left: "90px",
                  fontSize: "22px",
                }}
              >
                Rs.5000/-
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "100px",
                  left: "90px",
                  fontSize: "18px",
                }}
              >
                Total Dues
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "130px",
                  left: "90px",
                  fontSize: "22px",
                }}
              >
                Rs.{Tdue}/-
              </span>
            </div>
          </div>
          <div className="col-8">
            <table
              className="table table-bordered "
              style={{
                width: "50%",
                position: "absolute",
                left: "35%",
              }}
            >
              <thead className="table-primary">
                <tr>
                  <th style={{ fontSize: "20px" }}>Flats</th>
                  <th style={{ fontSize: "20px" }}>Dues</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{FlatDetails[0].flname}</td>
                  <td>Rs.{FlatDetails[0].RentDue}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>{FlatDetails[1].flname}</td>
                  <td>Rs.{FlatDetails[1].RentDue}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
