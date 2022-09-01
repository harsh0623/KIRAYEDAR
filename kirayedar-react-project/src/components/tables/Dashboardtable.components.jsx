import React from "react";
import { Link } from "react-router-dom";

const Table = (props) => {
  let flat = props.flat;

  return (
    <tbody style={{ textAlign: "center" }}>
      <tr>
        <td>
          {" "}
          <Link
            to="/transactions"
            style={{ textDecoration: "none", color: "black" }}
          >
            {flat.flname}
          </Link>
        </td>

        <td>Rs.{flat.RentDue}</td>
      </tr>
    </tbody>
  );
};

export default Table;
