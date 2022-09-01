import { MDBTableBody } from "mdb-react-ui-kit";
import React from "react";

const RentTable = ({Payments,flats}) => {
    const price = 10;
    let total =11500;
    return (
      <MDBTableBody style={{ textAlign: "center" }}>
        <tr>
          <td>{Payments?.date??""}</td>
          <td>{flats?.Flatname??""}</td>
          <td>Rs.{flats?.rent??""}</td>
          <td>{flats?.startUnit??""}</td>
          <td>Rs.{price}</td>
          <td>Rs.{total}</td>
        </tr>
      </MDBTableBody>
    );
};

export default RentTable;