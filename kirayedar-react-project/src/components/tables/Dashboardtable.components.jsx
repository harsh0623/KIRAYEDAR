import React from "react";


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
