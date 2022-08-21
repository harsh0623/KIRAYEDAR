import React from "react";
import { MDBTableBody } from "mdb-react-ui-kit";

const PaymentTable = ({payments}) => {
  return (
    <MDBTableBody>
      <tr style={{ textAlign: "center",fontSize:"18px" }}>
        <td style={{ width: "32%" }}>{payments.date}</td>
        <td style={{ width: "32%" }}>{payments.name}</td>
        <td style={{ width: "32%" }}>Rs.{payments.amountPaid}</td>
      </tr>
    </MDBTableBody>
  );
};

export default PaymentTable;
