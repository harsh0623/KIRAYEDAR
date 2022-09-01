import React from "react";
import { MDBTableBody } from "mdb-react-ui-kit";

const PaymentTable = ({Payments,flats}) => {
  return (
    <MDBTableBody>
      <tr style={{ textAlign: "center",fontSize:"18px" }}>
        <td style={{ width: "32%" }}>{Payments?.date??""}</td>
        <td style={{ width: "32%" }}>{flats?.tenantName??""}</td>
        <td style={{ width: "32%" }}>Rs.{Payments?.amount??""}</td>
      </tr>
    </MDBTableBody>
  );
};

export default PaymentTable;
