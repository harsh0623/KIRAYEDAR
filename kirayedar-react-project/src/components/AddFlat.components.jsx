import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const AddFlat = () => {
  const test = () => "";
  return (
    <>
      {" "}
      <div
        className="card"
        style={{
          width: "45%",
          height: "65vh",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "50px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: "20px", left: "20px" }}>
          <h4>Add Your Flat...</h4>
        </div>
        <form onSubmit={test}>
          <div className="form-group">
            <div
              className="row"
              style={{ position: "absolute", top: "60px", left: "20px" }}
            >
              <label htmlFor="flname">Flat Name*</label>
              <input
                style={{ width: "200px", position: "relative", left: "10px" }}
                type="text"
                id="flname"
                placeholder="Flat Name"
                onChange={test}
              />
              <label
                htmlFor="add"
                style={{ position: "relative", bottom: "55px", left: "250px" }}
              >
                Address*
              </label>
              <input
                style={{
                  width: "300px",
                  position: "absolute",
                  left: "260px",
                  top: "25px",
                }}
                type="text"
                id="add"
                placeholder="Address"
                onChange={test}
              />
            </div>
            <div
              className="row"
              style={{ position: "absolute", top: "130px", left: "20px" }}
            >
              <label htmlFor="Tenum">Tenant phone number*</label>
              <input
                style={{ width: "55px", position: "relative", left: "10px" }}
                type="text"
                value="+91"
                onChange={test}
              />
              <input
                style={{ width: "150px", position: "relative", left: "12px" }}
                type="tel"
                id="Tenum"
                placeholder="Phone number"
                onChange={test}
              />
              <label
                htmlFor="RPM"
                style={{ position: "relative", bottom: "55px", left: "250px" }}
              >
                Rent per month*
              </label>
              <input
                style={{
                  width: "300px",
                  position: "absolute",
                  left: "260px",
                  top: "25px",
                }}
                type="number"
                id="RPM"
                placeholder="Rent per month "
                onChange={test}
              />
            </div>
          </div>
          <div
            className="row"
            style={{ position: "absolute", top: "195px", left: "20px" }}
          >
            <label htmlFor="elecunit">Electricity start unit *</label>
            <input
              style={{ width: "210px", position: "relative", left: "10px" }}
              type="number"
              id="elecunit"
              placeholder="Electricity start unit"
              onChange={test}
            />
            <label
              htmlFor="priunit"
              style={{ position: "relative", bottom: "55px", left: "250px" }}
            >
              Electricity price per unit*
            </label>
            <input
              style={{
                width: "300px",
                position: "absolute",
                left: "260px",
                top: "25px",
              }}
              type="number"
              id="priunit"
              placeholder="Electricity price per unit"
              onChange={test}
            />
          </div>
          <div
            className="row"
            style={{ position: "absolute", top: "260px", left: "20px" }}
          >
            <label htmlFor="secmoney">Security money *</label>
            <input
              style={{ width: "210px", position: "relative", left: "10px" }}
              type="number"
              id="secmoney"
              placeholder="Security money"
              onChange={test}
            />
            <label
              htmlFor="strdate"
              style={{ position: "relative", bottom: "55px", left: "250px" }}
            >
              Start date*
            </label>
            <input
              style={{
                width: "300px",
                position: "absolute",
                left: "260px",
                top: "25px",
              }}
              type="date"
              id="strdate"
              placeholder="Start date"
              onChange={test}
            />
          </div>
        </form>
        <Link to="/dashboard">
          {" "}
          <MDBBtn
            outline
            style={{
              width: "120px",
              position: "relative",
              top: "350px",
              left: "55%",
            }}
          >
            Cancel
          </MDBBtn>
        </Link>
        <Link to="/dashboard">
          {" "}
          <MDBBtn
            style={{
              position: "relative",
              width: "120px",
              top: "310px",
              left: "78%",
            }}
          >
            PROCEED
          </MDBBtn>
        </Link>
      </div>
    </>
  );
};

export default AddFlat;
