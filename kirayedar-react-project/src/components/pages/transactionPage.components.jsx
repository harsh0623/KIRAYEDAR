import React from "react";
import { MDBTable, MDBTableHead, MDBBtn } from "mdb-react-ui-kit";
import EntriesTable from "../tables/EntriesTable.components";
import PaymentTable from "../tables/paymentTable.component";
import RentTable from "../tables/RentTable.components";

const TransactionPage = (props) => {
  const test = () => "";
  const Entries = props.Entries;
  const Payments = props.Payments;
  return (
    <div>
      <div>
        <MDBBtn
          rounded
          style={{ position: "relative", left: "90%", top: "5px" }}
        >
          Edit Entries
        </MDBBtn>
      </div>
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
      <div className="ms-4">
        <h4>Payment History</h4>
        <MDBBtn
          outline
          data-toggle="modal"
          data-target="#exampleModal2"
          style={{ position: "relative", left: "77%", bottom: "35px" }}
        >
          Add a New Payment
        </MDBBtn>
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
      <div className="ms-4">
        <h4 style={{ position: "relative", bottom: "35px" }}>Rent History</h4>
        <MDBBtn
          outline
          data-toggle="modal"
          data-target="#exampleModal"
          style={{
            position: "relative",
            width: "175px",
            left: "77%",
            bottom: "65px",
          }}
        >
          Add a New Rent
        </MDBBtn>

        <span
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

      <div
        className="modal fade "
        id="exampleModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabell"
        aria-hidden="true"
        data-bs-keyboard="false"
        data-bs-backdrop="static"
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
    </div>
  );
};

export default TransactionPage;
