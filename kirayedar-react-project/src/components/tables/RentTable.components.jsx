import { MDBTableBody } from "mdb-react-ui-kit";
import React from "react";

const RentTable = (props) => {
    const entries = props.Entries;
    const pay = props.payments;
    const price = 10;
    const total = parseInt(entries.Rent) + (entries.Electricity_consume * price);
    return (
      <MDBTableBody style={{ textAlign: "center" }}>
        <tr>
          <td>{pay.date}</td>
          <td>{entries.flname}</td>
          <td>Rs.{entries.Rent}</td>
          <td>{entries.Electricity_consume}</td>
          <td>Rs.{price}</td>
          <td>Rs.{total}</td>
        </tr>
      </MDBTableBody>
    );
};

export default RentTable;