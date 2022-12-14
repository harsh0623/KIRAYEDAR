import React from "react";
import { MDBTableBody } from "mdb-react-ui-kit";

const EntriesTable = ({ flats ,electricityConsume,totalDue}) => {
  

  
  return (
    <MDBTableBody>
      <tr style={{ textAlign: "center", fontSize: "18px" }}>
        <td style={{ width: "12%" }}>{flats.Flatname}</td>
        <td style={{ width: "12%" }}>{flats.address}</td>
        <td style={{ width: "12%" }}>{flats.tenantPhone}</td>
        <td style={{ width: "12%" }}>Rs.{flats.rent}</td>
        <td style={{ width: "12%" }}>Rs.{totalDue}</td>
        <td style={{ width: "12%" }}>{electricityConsume}</td>
        <td style={{ width: "12%" }}>Rs.{flats.security}</td>
        <td style={{ width: "12%" }}>{flats.startDate}</td>
      </tr>
    </MDBTableBody>
  );
};


export default EntriesTable;
