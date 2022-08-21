import React from "react";
import { Link } from "react-router-dom";

const Table = ({flat}) => {
    
    return (
        <tbody  style={{textAlign:"center"}}>
            <tr>
                <td>{flat.flname}</td>
                <td>Rs.{flat.RentDue}</td>
            </tr>
        </tbody>
    )
};

export default Table;
