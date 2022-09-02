import React from "react";
import { MDBTableBody } from "mdb-react-ui-kit";
import { getPayments, getRents } from "../../flatdata";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EntriesTable = ({ flats }) => {
  let params = useParams();
  const [payments, setPayment] = useState(getPayments);
  const [rents, setRent] = useState(getRents);
  useEffect(() => {
    setPayment(
      payments.filter((payment) => payment.FlatId === parseInt(params.FlatId))
    );
    setRent(rents.filter((rent) => rent.FlatId === parseInt(params.FlatId)));
  }, []);
  console.log(rents);
  let totalpayment = 0;
  let totalrent = 0;

  for (let payment of payments) {
    totalpayment = payment.amount + totalpayment;
  }

  for (let Rent of rents) {
    totalrent = Rent.rent + totalrent;
  }
  let ElectricityConsume = rents[0].endUnit - rents[0].startUnit;
  const totalDue = totalrent - totalpayment;
  
  return (
    <MDBTableBody>
      <tr style={{ textAlign: "center", fontSize: "18px" }}>
        <td style={{ width: "12%" }}>{flats.Flatname}</td>
        <td style={{ width: "12%" }}>{flats.address}</td>
        <td style={{ width: "12%" }}>{flats.tenantPhone}</td>
        <td style={{ width: "12%" }}>Rs.{flats.rent}</td>
        <td style={{ width: "12%" }}>Rs.{totalDue}</td>
        <td style={{ width: "12%" }}>{ElectricityConsume}</td>
        <td style={{ width: "12%" }}>Rs.{flats.security}</td>
        <td style={{ width: "12%" }}>{flats.startDate}</td>
      </tr>
    </MDBTableBody>
  );
};


export default EntriesTable;
