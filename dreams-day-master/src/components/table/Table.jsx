import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({ data }) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Phone no</TableCell>
            <TableCell className="tablecell">Name</TableCell>
            <TableCell className="tablecell">email</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Payment Image</TableCell>
            <TableCell className="tablecell">UPI Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tablecell">{row.mobile}</TableCell>
              <TableCell className="tablecell">
                <div className="cellwrapper">
                  {/* <img src={row.img} alt="" className="image" /> */}
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tablecell">{row.email}</TableCell>
              <TableCell className="tablecell">{row.email}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                {/* <span className={`status ${row.status}`}>{row.status}</span>
                 */}
                {row.upiId}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
