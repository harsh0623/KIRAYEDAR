import React from "react";

const Table = ({flat}) => {
    console.log(flat);
    return (
        <tbody>
            <tr>
                <td>{flat.flname}</td>
                <td>Rs.{flat.RentDue}</td>
            </tr>
        </tbody>
    )
};

export default Table;
