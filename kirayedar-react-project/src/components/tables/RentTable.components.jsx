import { MDBTableBody } from "mdb-react-ui-kit";
import React from "react";
import { getFlats, getPayments, getRents } from "../../flatdata";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RentTable = ({ Payments }) => {
  let params = useParams();
  const [flats, setFlat] = useState(getFlats);

  const [rents, setRent] = useState(getRents);

  useEffect(() => {
    setFlat(flats.filter((flat) => flat.id === parseInt(params.FlatId)));
    setRent(rents.filter((rent) => rent.FlatId === parseInt(params.FlatId)));
  }, []);

  const price = 10;
  let ElectricityConsume = rents[0].endUnit - rents[0].startUnit;
  let total = ElectricityConsume * price + flats[0].rent;
  return (
    <MDBTableBody style={{ textAlign: "center" }}>
      <tr>
        <td>{Payments?.date ?? ""}</td>
        <td>{flats[0]?.Flatname ?? ""}</td>
        <td>Rs.{flats[0]?.rent ?? ""}</td>
        <td>{ElectricityConsume ?? ""}</td>
        <td>Rs.{price}</td>
        <td>Rs.{total}</td>
      </tr>
    </MDBTableBody>
  );
};

export default RentTable;
