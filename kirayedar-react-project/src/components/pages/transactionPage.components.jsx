import React from "react";
import { MDBTable, MDBTableHead, MDBBtn, MDBTableBody } from "mdb-react-ui-kit";
import EntriesTable from "../tables/EntriesTable.components";
import PaymentTable from "../tables/paymentTable.component";
import RentTable from "../tables/RentTable.components";

const TransactionPage = (props) => {
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
          style={{ position: "relative", left: "78%", bottom: "35px" }}
        >
          Add a New Payment
        </MDBBtn>
        <span
          style={{
            fontSize: "20px",
            color: "blue",
            position: "relative",
            left: "79%",
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
          style={{
            position: "relative",
            width: "177px",
            left: "78%",
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
            left: "79%",
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
            <th
              scope="col"
              rowSpan="2"
              style={{ width: "19%", paddingBottom: "20px" }}
            >
              Date
            </th>
            <th
              scope="col"
              rowSpan="2"
              style={{ width: "19%", paddingBottom: "20px" }}
            >
              Flat No.
            </th>
            <th
              scope="col"
              rowSpan="2"
              style={{ width: "19%", paddingBottom: "20px" }}
            >
              Rent Amount
            </th>
            <th scope="col" rowSpan="2" colSpan="2" style={{ width: "20%" }}>
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
            <th
              scope="col"
              rowSpan="2"
              style={{ width: "19%", paddingBottom: "20px" }}
            >
              Total
            </th>
          </tr>
        </MDBTableHead>
        <RentTable Entries={Entries[0]} payments={Payments[0]}></RentTable>
        <RentTable Entries={Entries[1]} payments={Payments[1]}></RentTable>
      </MDBTable>
    </div>
  );
};

export default TransactionPage;
