import React from "react";
import { MDBTable, MDBTableHead, MDBBtn } from "mdb-react-ui-kit";
import EntriesTable from "../tables/EntriesTable.components";
import PaymentTable from "../tables/paymentTable.component";

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
            <th scope="col" style={{ width: "12%" }}>
              Flat Name
            </th>
            <th scope="col" style={{ width: "12%" }}>
              Address
            </th>
            <th scope="col" style={{ width: "12%" }}>
              Contact
            </th>
            <th scope="col" style={{ width: "12%" }}>
              Total Rent
            </th>
            <th scope="col" style={{ width: "12%" }}>
              Due
            </th>
            <th scope="col" style={{ width: "12%" }}>
              Electricity Consumed(Units)
            </th>
            <th scope="col" style={{ width: "12%" }}>
              Security
            </th>
            <th scope="col" style={{ width: "12%" }}>
              Shift on
            </th>
          </tr>
        </MDBTableHead>
        <EntriesTable entries={Entries[0]}></EntriesTable>
      </MDBTable>
      <div className="ms-4">
        <h4>Payment History</h4>
      </div>
      <MDBTable
        bordered
        hover
        className="  ms-auto me-auto mt-3"
        style={{ width: "96%" }}
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
        <h4>Rent History</h4>
      </div>
      <MDBTable
        bordered
        className="  ms-auto me-auto "
        style={{ width: "96%" }}
      >
        <MDBTableHead className="table-primary">
          <tr style={{ textAlign: "center" }}>
            <th scope="col" style={{ width: "19%" }}>
              Date
            </th>
            <th scope="col" style={{ width: "19%" }}>
              Flat No.
            </th>
            <th scope="col" style={{ width: "19%" }}>
              Rent Amount
            </th>
            <th scope="col" style={{ width: "20%" }}>
              Electricity
            </th>
            <th scope="col" style={{ width: "19%" }}>
              Total
            </th>
          </tr>
        </MDBTableHead>
      </MDBTable>
    </div>
  );
};

export default TransactionPage;
