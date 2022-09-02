import React from "react";
import { getFlats, getPayments, getRents } from "../../flatdata";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Dashboard = (props) => {
  const Test = () => "";
  const [flats, setFlat] = useState(getFlats);
  const [payments, setPayment] = useState(getPayments);
  const [rents, setRent] = useState(getRents);

  // useEffect(() => {
  //   setFlat(flats.filter((flat) => flat.id === parseInt(params.FlatId)));
  //   setPayment(
  //     payments.filter((payment) => payment.FlatId === parseInt(params.FlatId))
  //   );
  //   setRent(rents.filter((rent) => rent.FlatId === parseInt(params.FlatId)));
  // }, []);

 

  return (
    
    <>
      <div className="row justify-content-start">
        {/*This is the rent and due card */}
        <div className="col-4">
          <div className="container fluid">
            <div
              className="card  mt-4 "
              style={{
                width: "22vw",
                height: "30vh",
                marginLeft: "80px",
              }}
            >
              <img
                src="https://media.istockphoto.com/vectors/rupee-flat-icon-sign-vector-paper-money-symbol-isolated-on-white-vector-id1347090437?b=1&k=20&m=1347090437&s=612x612&w=0&h=v-PMtmWQY16Pa2ZXBUjYVJ1EnKJKNDC8V8_yzrBt-T0="
                alt="ruppees Sign"
                style={{
                  width: "50px",
                  position: "relative",
                  left: "20px",
                  top: "37px",
                }}
              ></img>
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
              <img
                src="https://media.istockphoto.com/vectors/rupee-flat-icon-sign-vector-paper-money-symbol-isolated-on-white-vector-id1347090437?b=1&k=20&m=1347090437&s=612x612&w=0&h=v-PMtmWQY16Pa2ZXBUjYVJ1EnKJKNDC8V8_yzrBt-T0="
                alt="ruppees Sign"
                style={{
                  width: "50px",
                  position: "relative",
                  top: "60px",
                  left: "20px",
                }}
              ></img>
              <span
                style={{
                  position: "absolute",
                  top: "130px",
                  left: "90px",
                  fontSize: "22px",
                }}
              >
                Rs.10000/-
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        {/* This is the add flat button*/}
        <div className="">
          <button
            type="submit"
            className="btn btn-primary mt-2"
            style={{ marginLeft: "88%" }}
            data-toggle="modal"
            data-target="#exampleModal3"
          >
            ADD FLAT
          </button>
        </div>

        {/* This the flat table*/}
        <div className="col-12 mt-2">
          <table
            className="table table-bordered "
            style={{
              width: "90vw",
              marginLeft: "80px",
            }}
          >
            <thead className="table-primary">
              <tr style={{ textAlign: "center", fontSize: "20px" }}>
                <th style={{ width: "50%" }}>Flats</th>
                <th style={{ width: "50%" }}>Dues</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {flats.map((flat) => (
                <tr>
                  <td>
                    {" "}
                    <NavLink
                      to={`/transactions/${flat.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {flat.Flatname}
                    </NavLink>
                  </td>

                  <td>Rs.{flat.rent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/*This is the add flat pop up*/}
      <div
        className="modal fade"
        id="exampleModal3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ marginTop: "80px", marginLeft: "70px" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div
            className="modal-content"
            style={{ height: "65vh", width: "47vw" }}
          >
            <div className="row ms-3 mt-2 justify-content-center">
              <h4>Add Your Flat...</h4>
            </div>
            <form onSubmit={Test}>
              <div className="form-group">
                <div
                  className="row"
                  style={{ position: "absolute", top: "60px", left: "20px" }}
                >
                  <label htmlFor="flname">Flat Name*</label>
                  <input
                    style={{
                      width: "200px",
                      position: "relative",
                      left: "10px",
                    }}
                    type="text"
                    id="flname"
                    placeholder="Flat Name"
                    onChange={Test}
                  />
                  <label
                    htmlFor="add"
                    style={{
                      position: "relative",
                      bottom: "55px",
                      left: "250px",
                    }}
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
                    onChange={Test}
                  />
                </div>
                <div
                  className="row"
                  style={{ position: "absolute", top: "130px", left: "20px" }}
                >
                  <label htmlFor="Tenum">Tenant phone number*</label>
                  <input
                    style={{
                      width: "55px",
                      position: "relative",
                      left: "10px",
                    }}
                    type="text"
                    value="+91"
                    onChange={Test}
                  />
                  <input
                    style={{
                      width: "150px",
                      position: "relative",
                      left: "12px",
                    }}
                    type="tel"
                    id="Tenum"
                    placeholder="Phone number"
                    onChange={Test}
                  />
                  <label
                    htmlFor="RPM"
                    style={{
                      position: "relative",
                      bottom: "55px",
                      left: "250px",
                    }}
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
                    onChange={Test}
                  />
                </div>
              </div>
              <div
                className="row"
                style={{ position: "absolute", top: "195px", left: "20px" }}
              >
                <label htmlFor="elecunit">Electricity start unit *</label>
                <input
                  style={{
                    width: "210px",
                    position: "relative",
                    left: "10px",
                  }}
                  type="number"
                  id="elecunit"
                  placeholder="Electricity start unit"
                  onChange={Test}
                />
                <label
                  htmlFor="priunit"
                  style={{
                    position: "relative",
                    bottom: "55px",
                    left: "250px",
                  }}
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
                  onChange={Test}
                />
              </div>
              <div
                className="row"
                style={{ position: "absolute", top: "260px", left: "20px" }}
              >
                <label htmlFor="secmoney">Security money *</label>
                <input
                  style={{
                    width: "210px",
                    position: "relative",
                    left: "10px",
                  }}
                  type="number"
                  id="secmoney"
                  placeholder="Security money"
                  onChange={Test}
                />
                <label
                  htmlFor="strdate"
                  style={{
                    position: "relative",
                    bottom: "55px",
                    left: "250px",
                  }}
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
                  onChange={Test}
                />
              </div>
              <button
                type="button"
                className="btn-secondary btn btn-bordered"
                data-dismiss="modal"
                style={{
                  width: "150px",
                  position: "relative",
                  left: "48%",
                  top: "310px",
                }}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "150px",
                  position: "relative",
                  left: "50%",
                  top: "310px",
                }}
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
