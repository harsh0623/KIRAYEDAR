import React, { useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import EntriesTable from "../tables/EntriesTable.components";
import { useParams } from "react-router-dom";
import { getFlats, getPayments, getRents } from "../../flatdata";
import { useEffect } from "react";

const TransactionPage = () => {
  const test = () => "";

  let params = useParams();
  const [flats, setFlat] = useState(getFlats);
  const [payments, setPayment] = useState(getPayments);
  const [rents, setRent] = useState(getRents);

  useEffect(() => {
    setFlat(flats.filter((flat) => flat.id === parseInt(params.FlatId)));
    setPayment(
      payments.filter((payment) => payment.FlatId === parseInt(params.FlatId))
    );
    setRent(rents.filter((rent) => rent.FlatId === parseInt(params.FlatId)));
  }, []);

  return (
    <div>
      {/*This is the edit entry button*/}
      <div className="row justify-content-end me-4 mt-2">
        <button
          type="button "
          style={{
            backgroundColor: "blue",
            borderColor: "#2196F3",
            border: "1px solid",
            height: "6vh",
            width: "11vw",
            borderRadius: "5px",
            color: "white",
            fontSize: "18px",
          }}
        >
          Edit Entries
        </button>
      </div>
      {/*This is the entry table*/}
      <MDBTable
        hover
        className="  ms-auto me-auto mt-3"
        style={{ width: "96%", border: "1px solid lightBlue" }}
      >
        <MDBTableHead className="table-primary">
          <tr style={{ textAlign: "center" }}>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Flat Name
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Address
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Contact
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Total Rent
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Due
            </th>
            <th scope="col" style={{ width: "12%" }}>
              Electricity Consumed(Units)
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Security
            </th>
            <th scope="col" style={{ width: "12%", paddingBottom: "20px" }}>
              Shift on
            </th>
          </tr>
        </MDBTableHead>
        <EntriesTable
          flats={flats[0]}
          electricityConsume={rents.reduce(
            (totalUnits, rent) => totalUnits + (rent.endUnit - rent.startUnit),
            0
          )}
          totalDue={rents.reduce(
            (totalRent, rent) =>
              totalRent+ flats[0].rent + ((rent.endUnit - rent.startUnit) * flats[0].pricePerUnit), 0) -
            payments.reduce((totalPayment,payment)=>(totalPayment+payment.amount),0)}
        ></EntriesTable>
      </MDBTable>
      {/*This is the add payment and view all container*/}
      <div className="ms-4">
        <h4>Payment History</h4>
        <button
          type="button"
          data-toggle="modal"
          data-target="#exampleModal2"
          style={{
            position: "relative",
            left: "77%",
            bottom: "35px",
            background: "white",
            borderColor: "#2196F3",
            border: "1px solid",
            color: "blue",
            height: "6vh",
            width: "fit-content",
            borderRadius: "5px",
          }}
        >
          Add a New Payment
        </button>
        <span
          data-toggle="modal"
          data-target="#ViewPaymentModal"
          style={{
            fontSize: "20px",
            color: "blue",
            position: "relative",
            left: "78%",
            bottom: "35px",
            cursor: "pointer",
          }}
        >
          View All
        </span>
      </div>
      {/*This is the Payments table*/}
      <MDBTable
        bordered
        hover
        className="  ms-auto me-auto mt-3"
        style={{ width: "96%", position: "relative", bottom: "35px" }}
      >
        <MDBTableHead className="table-primary">
          <tr style={{ textAlign: "center" }}>
            <th scope="col" style={{ width: "32%" }}>
              Date
            </th>
            <th scope="col" style={{ width: "32%" }}>
              Name
            </th>
            <th scope="col" style={{ width: "32%" }}>
              Amount Paid
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {payments.slice(0, 3).map((payment) => (
            <tr
              key={payment.id}
              style={{ textAlign: "center", fontSize: "18px" }}
            >
              <td style={{ width: "32%" }}>{payment?.date ?? ""}</td>
              <td style={{ width: "32%" }}>{flats[0]?.tenantName ?? ""}</td>
              <td style={{ width: "32%" }}>Rs.{payment?.amount ?? ""}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      {/*This is the add rent and view all container*/}
      <div className="ms-4">
        <h4 style={{ position: "relative", bottom: "35px" }}>Rent History</h4>
        <button
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{
            position: "relative",
            left: "77%",
            bottom: "65px",
            background: "white",
            borderColor: "#2196F3",
            border: "1px solid",
            color: "blue",
            height: "6vh",
            width: "13vw",
            borderRadius: "5px",
          }}
        >
          Add a New Rent
        </button>

        <span
          data-toggle="modal"
          data-target="#ViewModal"
          style={{
            fontSize: "20px",
            color: "blue",
            position: "relative",
            left: "78%",
            bottom: "65px",
            cursor: "pointer",
          }}
        >
          View All
        </span>
      </div>
      {/*This is the Rent table*/}
      <MDBTable
        bordered
        className="  ms-auto me-auto "
        style={{ width: "96%", position: "relative", bottom: "48px" }}
      >
        <MDBTableHead className="table-primary">
          <tr style={{ textAlign: "center" }}>
            <th
              rowSpan="2"
              scope="col"
              style={{ width: "19%", paddingBottom: "20px" }}
            >
              Date
            </th>
            <th
              scope="col"
              rowSpan="2"
              style={{ width: "19%", paddingBottom: "20px" }}
            >
              Flat No.
            </th>
            <th
              scope="col"
              rowSpan="2"
              style={{ width: "19%", paddingBottom: "20px" }}
            >
              Rent Amount
            </th>
            <th scope="col" colSpan="2" style={{ width: "20%" }}>
              Electricity
            </th>
            <th
              rowSpan="2"
              scope="col"
              style={{ width: "19%", paddingBottom: "20px" }}
            >
              Total
            </th>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <th style={{ width: "10%" }}>units</th>
            <th style={{ width: "10%" }}>price</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody style={{ textAlign: "center" }}>
          {rents.slice(0, 3).map((rent) => (
            <tr key={rent.id}>
              <td>{rent.date}</td>
              <td>{flats[0]?.Flatname ?? ""}</td>
              <td>Rs.{flats[0]?.rent ?? ""}</td>
              <td>{rent.endUnit - rent.startUnit}</td>
              <td>
                Rs.{(rent.endUnit - rent.startUnit) * flats[0].pricePerUnit}
              </td>
              <td>
                Rs.
                {(rent.endUnit - rent.startUnit) * flats[0].pricePerUnit +
                  rent.rent}
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      {/*This is the Modal pop up for add Rent*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ marginTop: "80px" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{ height: "65vh" }}>
            <div style={{ position: "relative", top: "10px", left: "20px" }}>
              <h3>Add Rent </h3>
            </div>
            <form onSubmit={test}>
              <div className="form-group">
                <div
                  className="row"
                  style={{ position: "relative", top: "20px", left: "30px" }}
                >
                  <label htmlFor="rent">Rent*</label>
                  <input
                    style={{ width: "90%" }}
                    type="number"
                    placeholder="Rent"
                    id="rent"
                    onChange={test}
                  />
                </div>
                <div
                  className="row"
                  style={{ position: "relative", top: "33px", left: "30px" }}
                >
                  <label htmlFor="unitstart">Unit Start*</label>
                  <input
                    style={{ width: "45%" }}
                    type="number"
                    placeholder="Unit Start "
                    id="unitstart"
                    onChange={test}
                  />
                  <label
                    style={{
                      position: "relative",
                      bottom: "55px",
                      left: "46%",
                    }}
                    htmlFor="unitend"
                  >
                    Unit End*
                  </label>
                  <input
                    style={{
                      position: "relative",
                      bottom: "54px",
                      left: "46%",
                      width: "44%",
                    }}
                    type="number"
                    placeholder="Unit End "
                    id="unitend"
                    onChange={test}
                  />
                </div>
                <div
                  className="row"
                  style={{ position: "relative", top: "-10px", left: "30px" }}
                >
                  <label htmlFor="totalunit">Total Unit*</label>
                  <input
                    style={{ width: "45%" }}
                    type="number"
                    placeholder="Total Unit"
                    id="totalunit"
                    onChange={test}
                  />
                  <label
                    style={{
                      position: "relative",
                      bottom: "55px",
                      left: "46%",
                    }}
                    htmlFor="bill"
                  >
                    Bill*
                  </label>
                  <input
                    style={{
                      position: "relative",
                      bottom: "54px",
                      left: "46%",
                      width: "44%",
                    }}
                    type="number"
                    placeholder="Bill "
                    id="bill"
                    onChange={test}
                  />
                </div>
                <div
                  className="row"
                  style={{ position: "relative", top: "-55px", left: "30px" }}
                >
                  <label htmlFor="total">Total*</label>
                  <input
                    style={{ width: "60%" }}
                    type="number"
                    placeholder="Total"
                    id="total"
                    onChange={test}
                  />
                </div>
                <button
                  type="button"
                  className="btn-secondary btn btn-bordered"
                  data-dismiss="modal"
                  style={{
                    width: "150px",
                    position: "relative",
                    left: "59%",
                    bottom: "10px",
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    width: "150px",
                    position: "relative",
                    left: "61%",
                    bottom: "10px",
                  }}
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*This is the Modal pop up for add payments*/}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabell"
        aria-hidden="true"
        style={{ marginTop: "100px" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{ height: "45vh" }}>
            <div style={{ position: "relative", top: "10px", left: "20px" }}>
              <h3>Add Payments </h3>
            </div>
            <form onSubmit={test}>
              <div className="form-group">
                <div
                  className="row"
                  style={{ position: "relative", top: "20px", left: "30px" }}
                >
                  <label htmlFor="rent">Date*</label>
                  <input
                    style={{ width: "90%" }}
                    type="date"
                    placeholder="Date"
                    id="date"
                    onChange={test}
                  />
                </div>
                <div
                  className="row"
                  style={{ position: "relative", top: "33px", left: "30px" }}
                >
                  <label htmlFor="name">Name*</label>
                  <input
                    style={{ width: "45%" }}
                    type="text"
                    placeholder="Name "
                    id="name"
                    onChange={test}
                  />
                  <label
                    style={{
                      position: "relative",
                      bottom: "55px",
                      left: "46%",
                    }}
                    htmlFor="amntpaid"
                  >
                    Amount Paid*
                  </label>
                  <input
                    style={{
                      position: "relative",
                      bottom: "54px",
                      left: "46%",
                      width: "44%",
                    }}
                    type="number"
                    placeholder="Amount Paid "
                    id="amntpaid"
                    onChange={test}
                  />
                </div>

                <button
                  type="button"
                  className="btn-secondary btn btn-bordered"
                  data-dismiss="modal"
                  style={{
                    width: "150px",
                    position: "relative",
                    left: "59%",
                    top: "20px",
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{
                    width: "150px",
                    position: "relative",
                    left: "61%",
                    top: "20px",
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*This is the view all rent deatils pop up */}
      <div
        className="modal fade"
        id="ViewModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabell"
        aria-hidden="true"
        style={{ marginTop: "100px", marginLeft: "-100px" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div
            className="modal-content"
            style={{ height: "50vh", width: "78vw" }}
          >
            <div style={{ position: "relative", top: "20px", left: "20px" }}>
              <h5>Rent History</h5>
            </div>
            <MDBTable
              bordered
              className="  ms-auto me-auto "
              style={{ width: "96%", position: "relative", top: "25px" }}
            >
              <MDBTableHead className="table-primary">
                <tr style={{ textAlign: "center" }}>
                  <th
                    scope="col"
                    rowSpan="2"
                    style={{ width: "19%", paddingBottom: "20px" }}
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    rowSpan="2"
                    style={{ width: "19%", paddingBottom: "20px" }}
                  >
                    Flat No.
                  </th>
                  <th
                    scope="col"
                    rowSpan="2"
                    style={{ width: "19%", paddingBottom: "20px" }}
                  >
                    Rent Amount
                  </th>
                  <th scope="col" colSpan="2" style={{ width: "20%" }}>
                    Electricity
                  </th>
                  <th
                    scope="col"
                    rowSpan="2"
                    style={{ width: "19%", paddingBottom: "20px" }}
                  >
                    Total
                  </th>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <th>units</th>
                  <th>price</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody style={{ textAlign: "center" }}>
                {rents.map((rent) => (
                  <tr>
                    <td>{rent.date}</td>
                    <td>{flats[0]?.Flatname ?? ""}</td>
                    <td>Rs.{flats[0]?.rent ?? ""}</td>
                    <td>{rent.endUnit - rent.startUnit}</td>
                    <td>
                      Rs.
                      {(rent.endUnit - rent.startUnit) * flats[0].pricePerUnit}
                    </td>
                    <td>
                      Rs.
                      {(rent.endUnit - rent.startUnit) * flats[0].pricePerUnit +
                        rent.rent}
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </div>
      {/*This is the view all payments details pop up */}
      <div
        className="modal fade"
        id="ViewPaymentModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabell"
        aria-hidden="true"
        style={{ marginTop: "100px", marginLeft: "-100px" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div
            className="modal-content"
            style={{ height: "40vh", width: "78vw" }}
          >
            <div style={{ position: "relative", top: "20px", left: "20px" }}>
              <h5>Payment History</h5>
            </div>
            <MDBTable
              bordered
              hover
              className="  ms-auto me-auto mt-3"
              style={{ width: "96%", position: "relative", top: "10px" }}
            >
              <MDBTableHead className="table-primary">
                <tr style={{ textAlign: "center" }}>
                  <th scope="col" style={{ width: "32%" }}>
                    Date
                  </th>
                  <th scope="col" style={{ width: "32%" }}>
                    Name
                  </th>
                  <th scope="col" style={{ width: "32%" }}>
                    Amount Paid
                  </th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {payments.map((payment) => (
                  <tr
                    key={payment.id}
                    style={{ textAlign: "center", fontSize: "18px" }}
                  >
                    <td style={{ width: "32%" }}>{payment?.date ?? ""}</td>
                    <td style={{ width: "32%" }}>
                      {flats[0]?.tenantName ?? ""}
                    </td>
                    <td style={{ width: "32%" }}>Rs.{payment?.amount ?? ""}</td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
