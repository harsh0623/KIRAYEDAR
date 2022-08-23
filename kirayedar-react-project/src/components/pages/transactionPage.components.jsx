import React from "react";
import { MDBTable, MDBTableHead } from "mdb-react-ui-kit";
import EntriesTable from "../tables/EntriesTable.components";
import PaymentTable from "../tables/paymentTable.component";
import RentTable from "../tables/RentTable.components";

const TransactionPage = (props) => {
  const test = () => "";
  const Entries = props.Entries;
  const Payments = props.Payments;
  return (
    <div>
      {/*This is the edit entry button*/}
      <div>
        <button
          type="button"
          style={{
            position: "relative",
            left: "87%",
            top: "5px",
            backgroundColor: "blue",
            borderColor: "#2196F3",
            border: "1px solid",
            height: "6vh",
            width: "11vw",
            borderRadius: "5px",
            color: "white",
            fontSize: "18px",
          }}
        >
          Edit Entries
        </button>
      </div>
      {/*This is the entry table*/}
      <MDBTable
        hover
        className="  ms-auto me-auto mt-3"
        style={{ width: "96%", border: "1px solid lightBlue" }}
      >
        <MDBTableHead className="table-primary">
          <tr style={{ textAlign: "center" }}>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Flat Name
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Address
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Contact
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Total Rent
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Due
            </th>
            <th scope="col" style={{ width: "12%" }}>
              Electricity Consumed(Units)
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Security
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Shift on
            </th>
          </tr>
        </MDBTableHead>
        <EntriesTable entries={Entries[0]}></EntriesTable>
      </MDBTable>
      {/*This is the add payment and view all container*/}
      <div className="ms-4" data-toggle="modal" data-target="#ViewPaymentModal">
        <h4>Payment History</h4>
        <button
          type="button"
          data-toggle="modal"
          data-target="#exampleModal2"
          style={{
            position: "relative",
            left: "77%",
            bottom: "35px",
            background: "white",
            borderColor: "#2196F3",
            border: "1px solid",
            color: "blue",
            height: "6vh",
            width: "13vw",
            borderRadius: "5px",
          }}
        >
          Add a New Payment
        </button>
        <span
          style={{
            fontSize: "20px",
            color: "blue",
            position: "relative",
            left: "78%",
            bottom: "35px",
          }}
        >
          View All
        </span>
      </div>
      {/*This is the Payments table*/}
      <MDBTable
        bordered
        hover
        className="  ms-auto me-auto mt-3"
        style={{ width: "96%", position: "relative", bottom: "35px" }}
      >
        <MDBTableHead className="table-primary">
          <tr style={{ textAlign: "center" }}>
            <th scope="col" style={{ width: "32%" }}>
              Date
            </th>
            <th scope="col" style={{ width: "32%" }}>
              Name
            </th>
            <th scope="col" style={{ width: "32%" }}>
              Amount Paid
            </th>
          </tr>
        </MDBTableHead>
        <PaymentTable payments={Payments[0]}></PaymentTable>
        <PaymentTable payments={Payments[1]}></PaymentTable>
      </MDBTable>
      {/*This is the add rent and view all container*/}
      <div className="ms-4">
        <h4 style={{ position: "relative", bottom: "35px" }}>Rent History</h4>
        <button
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{
            position: "relative",
            left: "77%",
            bottom: "65px",
            background: "white",
            borderColor: "#2196F3",
            border: "1px solid",
            color: "blue",
            height: "6vh",
            width: "13vw",
            borderRadius: "5px",
          }}
        >
          Add a New Rent
        </button>

        <span
          data-toggle="modal"
          data-target="#ViewModal"
          style={{
            fontSize: "20px",
            color: "blue",
            position: "relative",
            left: "78%",
            bottom: "65px",
          }}
        >
          View All
        </span>
      </div>
      {/*This is the Rent table*/}
      <MDBTable
        bordered
        className="  ms-auto me-auto "
        style={{ width: "96%", position: "relative", bottom: "48px" }}
      >
        <MDBTableHead className="table-primary">
          <tr style={{ textAlign: "center" }}>
            <th scope="col" style={{ width: "19%", paddingBottom: "20px" }}>
              Date
            </th>
            <th scope="col" style={{ width: "19%", paddingBottom: "20px" }}>
              Flat No.
            </th>
            <th scope="col" style={{ width: "19%", paddingBottom: "20px" }}>
              Rent Amount
            </th>
            <th scope="col" rowSpan={2} colSpan="2" style={{ width: "20%" }}>
              Electricity
              <th
                style={{
                  textAlign: "center",
                  width: "50%",
                  position: "relative",
                  left: "33px",
                }}
              >
                {" "}
                units
              </th>
              <th
                style={{
                  textAlign: "center",
                  width: "50%",
                  position: "relative",
                  left: "123px",
                }}
              >
                {" "}
                price
              </th>
            </th>
            <th scope="col" style={{ width: "19%", paddingBottom: "20px" }}>
              Total
            </th>
          </tr>
        </MDBTableHead>
        <RentTable Entries={Entries[0]} payments={Payments[0]}></RentTable>
        <RentTable Entries={Entries[1]} payments={Payments[1]}></RentTable>
      </MDBTable>
      {/*This is the Modal pop up for add Rent*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ marginTop: "80px" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{ height: "65vh" }}>
            <div style={{ position: "relative", top: "10px", left: "20px" }}>
              <h3>Add Rent </h3>
            </div>
            <form onSubmit={test}>
              <div className="form-group">
                <div
                  className="row"
                  style={{ position: "relative", top: "20px", left: "30px" }}
                >
                  <label htmlFor="rent">Rent*</label>
                  <input
                    style={{ width: "90%" }}
                    type="number"
                    placeholder="Rent"
                    id="rent"
                    onChange={test}
                  />
                </div>
                <div
                  className="row"
                  style={{ position: "relative", top: "33px", left: "30px" }}
                >
                  <label htmlFor="unitstart">Unit Start*</label>
                  <input
                    style={{ width: "45%" }}
                    type="number"
                    placeholder="Unit Start "
                    id="unitstart"
                    onChange={test}
                  />
                  <label
                    style={{
                      position: "relative",
                      bottom: "55px",
                      left: "46%",
                    }}
                    htmlFor="unitend"
                  >
                    Unit End*
                  </label>
                  <input
                    style={{
                      position: "relative",
                      bottom: "54px",
                      left: "46%",
                      width: "44%",
                    }}
                    type="number"
                    placeholder="Unit End "
                    id="unitend"
                    onChange={test}
                  />
                </div>
                <div
                  className="row"
                  style={{ position: "relative", top: "-10px", left: "30px" }}
                >
                  <label htmlFor="totalunit">Total Unit*</label>
                  <input
                    style={{ width: "45%" }}
                    type="number"
                    placeholder="Total Unit"
                    id="totalunit"
                    onChange={test}
                  />
                  <label
                    style={{
                      position: "relative",
                      bottom: "55px",
                      left: "46%",
                    }}
                    htmlFor="bill"
                  >
                    Bill*
                  </label>
                  <input
                    style={{
                      position: "relative",
                      bottom: "54px",
                      left: "46%",
                      width: "44%",
                    }}
                    type="number"
                    placeholder="Bill "
                    id="bill"
                    onChange={test}
                  />
                </div>
                <div
                  className="row"
                  style={{ position: "relative", top: "-55px", left: "30px" }}
                >
                  <label htmlFor="total">Total*</label>
                  <input
                    style={{ width: "60%" }}
                    type="number"
                    placeholder="Total"
                    id="total"
                    onChange={test}
                  />
                </div>
                <button
                  type="button"
                  className="btn-secondary btn btn-bordered"
                  data-dismiss="modal"
                  style={{
                    width: "150px",
                    position: "relative",
                    left: "59%",
                    bottom: "10px",
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    width: "150px",
                    position: "relative",
                    left: "61%",
                    bottom: "10px",
                  }}
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*This is the Modal pop up for add payments*/}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabell"
        aria-hidden="true"
        style={{ marginTop: "100px" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{ height: "45vh" }}>
            <div style={{ position: "relative", top: "10px", left: "20px" }}>
              <h3>Add Payments </h3>
            </div>
            <form onSubmit={test}>
              <div className="form-group">
                <div
                  className="row"
                  style={{ position: "relative", top: "20px", left: "30px" }}
                >
                  <label htmlFor="rent">Date*</label>
                  <input
                    style={{ width: "90%" }}
                    type="date"
                    placeholder="Date"
                    id="date"
                    onChange={test}
                  />
                </div>
                <div
                  className="row"
                  style={{ position: "relative", top: "33px", left: "30px" }}
                >
                  <label htmlFor="name">Name*</label>
                  <input
                    style={{ width: "45%" }}
                    type="text"
                    placeholder="Name "
                    id="name"
                    onChange={test}
                  />
                  <label
                    style={{
                      position: "relative",
                      bottom: "55px",
                      left: "46%",
                    }}
                    htmlFor="amntpaid"
                  >
                    Amount Paid*
                  </label>
                  <input
                    style={{
                      position: "relative",
                      bottom: "54px",
                      left: "46%",
                      width: "44%",
                    }}
                    type="number"
                    placeholder="Amount Paid "
                    id="amntpaid"
                    onChange={test}
                  />
                </div>

                <button
                  type="button"
                  className="btn-secondary btn btn-bordered"
                  data-dismiss="modal"
                  style={{
                    width: "150px",
                    position: "relative",
                    left: "59%",
                    top: "20px",
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    width: "150px",
                    position: "relative",
                    left: "61%",
                    top: "20px",
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*This is the view all rent deatils pop up */}
      <div
        className="modal fade"
        id="ViewModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabell"
        aria-hidden="true"
        style={{ marginTop: "100px", marginLeft: "-100px" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div
            className="modal-content"
            style={{ height: "50vh", width: "78vw" }}
          >
            <div style={{ position: "relative", top: "20px", left: "20px" }}>
              <h5>Rent History</h5>
            </div>
            <MDBTable
              bordered
              className="  ms-auto me-auto "
              style={{ width: "96%", position: "relative", top: "25px" }}
            >
              <MDBTableHead className="table-primary">
                <tr style={{ textAlign: "center" }}>
                  <th
                    scope="col"
                    style={{ width: "19%", paddingBottom: "20px" }}
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    style={{ width: "19%", paddingBottom: "20px" }}
                  >
                    Flat No.
                  </th>
                  <th
                    scope="col"
                    style={{ width: "19%", paddingBottom: "20px" }}
                  >
                    Rent Amount
                  </th>
                  <th
                    scope="col"
                    rowSpan={2}
                    colSpan="2"
                    style={{ width: "20%" }}
                  >
                    Electricity
                    <th
                      style={{
                        textAlign: "center",
                        width: "50%",
                        position: "relative",
                        left: "22px",
                      }}
                    >
                      {" "}
                      units
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        width: "50%",
                        position: "relative",
                        left: "85px",
                      }}
                    >
                      {" "}
                      price
                    </th>
                  </th>
                  <th
                    scope="col"
                    style={{ width: "19%", paddingBottom: "20px" }}
                  >
                    Total
                  </th>
                </tr>
              </MDBTableHead>
              <RentTable
                Entries={Entries[0]}
                payments={Payments[0]}
              ></RentTable>
              <RentTable
                Entries={Entries[1]}
                payments={Payments[1]}
              ></RentTable>
            </MDBTable>
          </div>
        </div>
      </div>
      {/*This is the view all payments details pop up */}
      <div
        className="modal fade"
        id="ViewPaymentModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabell"
        aria-hidden="true"
        style={{ marginTop: "100px", marginLeft: "-100px" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div
            className="modal-content"
            style={{ height: "40vh", width: "78vw" }}
          >
            <div style={{ position: "relative", top: "20px", left: "20px" }}>
              <h5>Payment History</h5>
            </div>
            <MDBTable
              bordered
              hover
              className="  ms-auto me-auto mt-3"
              style={{ width: "96%", position: "relative", top: "10px" }}
            >
              <MDBTableHead className="table-primary">
                <tr style={{ textAlign: "center" }}>
                  <th scope="col" style={{ width: "32%" }}>
                    Date
                  </th>
                  <th scope="col" style={{ width: "32%" }}>
                    Name
                  </th>
                  <th scope="col" style={{ width: "32%" }}>
                    Amount Paid
                  </th>
                </tr>
              </MDBTableHead>
              <PaymentTable payments={Payments[0]}></PaymentTable>
              <PaymentTable payments={Payments[1]}></PaymentTable>
            </MDBTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
