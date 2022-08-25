import React from "react";
import { useState } from "react";
import Table from "../tables/Dashboardtable.components";


const Dashboard = (props) => {

  let [Flat,setFlat] = useState({
    flname: null,
    RentDue: null
  })
  const flat = props.FlatDetails;
  let Tdue = 0;
  for (const flats of flat) {
    Tdue = flats.RentDue + Tdue;
  }
  const HandleInputChange = (event) => {
    setFlat(() => ({ ...Flat, [event.target.id]: event.target.value }));
  };
  const addFlat = () => {
    console.log(Flat);
  }
  
  return (
    <>
      <div className="container fluid mt-4">
        <div className="row">
          {/*This is the rent and due card */}
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
              <img
                src="https://cdn4.vectorstock.com/i/thumb-large/53/28/indian-rupee-coin-official-currency-india-vector-34485328.jpg"
                alt="ruppees Sign"
                style={{
                  width: "40px",
                  position: "relative",
                  left: "30px",
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
                  width: "60px",
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
                Rs.{Tdue}/-
              </span>
            </div>
          </div>
          {/* This the flat table*/}
          <div className="col-8">
            <table
              className="table table-bordered table-hover"
              style={{
                width: "50%",
                position: "absolute",
                left: "35%",
              }}
            >
              <thead className="table-primary">
                <tr style={{ textAlign: "center", fontSize: "20px" }}>
                  <th style={{ width: "50%" }}>Flats</th>
                  <th style={{ width: "50%" }}>Dues</th>
                </tr>
              </thead>
              <Table flat={flat[0]}></Table>
              <Table flat={flat[1]}></Table>
              <Table flat={flat[2]}></Table>
            </table>
          </div>
        </div>
        {/* This is the add flat button*/}
        <span style={{ position: "relative", left: "95%", bottom: "60px" }}>
          <button
            type="submit"
            className="btn btn-primary  mt-4"
            data-toggle="modal"
            data-target="#exampleModal3"
          >
            ADD FLAT
          </button>
        </span>
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
            <div style={{ position: "absolute", top: "20px", left: "20px" }}>
              <h4>Add Your Flat...</h4>
            </div>
            <form onSubmit={addFlat}>
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
                    onChange={HandleInputChange}
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
                    onChange={HandleInputChange}
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
                    onChange={HandleInputChange}
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
                    onChange={HandleInputChange}
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
                    onChange={HandleInputChange}
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
                  onChange={HandleInputChange}
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
                  onChange={HandleInputChange}
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
                  onChange={HandleInputChange}
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
                  onChange={HandleInputChange}
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
                  top: "350px",
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
                  top: "350px",
                }}
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default Dashboard;
