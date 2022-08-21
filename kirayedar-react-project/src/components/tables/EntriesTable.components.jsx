import React from "react";
import { MDBTableBody } from "mdb-react-ui-kit";

const EntriesTable = ({ entries }) => {
  return (
    <MDBTableBody>
      <tr style={{ textAlign: "center",fontSize:"18px" }}>
        <td style={{ width: "12%" }}>{entries.flname}</td>
        <td style={{ width: "12%" }}>{entries.Address}</td>
        <td style={{ width: "12%" }}>{entries.contact}</td>
        <td style={{ width: "12%" }}>Rs.{entries.Rent}</td>
        <td style={{ width: "12%" }}>Rs.{entries.RentDue}</td>
        <td style={{ width: "12%" }}>{entries.Electricity_consume}</td>
              <td style={{ width: "12%" }}>Rs.{entries.security }</td>
              <td style={{ width: "12%" }}>{ entries.shift}</td>
      </tr>
    </MDBTableBody>
  );
};

export default EntriesTable;