import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";

const DataTable = ({ data }) => {
  return (
    <div>
      <TableContainer
        component={Paper}
        style={{ width: "100%", overflowX: "auto" }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontSize: "22px",
                  paddingLeft: "50px",
                  fontWeight: "600",
                  borderBottom: "1px solid #315C8E",
                }}
              >
                სტუდენტის სახელი და გვარი
              </TableCell>
              <TableCell
                style={{
                  minWidth: "100px",
                  fontSize: "22px",
                  borderBottom: "1px solid #315C8E",
                  fontWeight: "600",
                }}
              >
                სტატუსი
              </TableCell>
              <TableCell
                style={{
                  minWidth: "100px",
                  fontSize: "22px",
                  borderBottom: "1px solid #315C8E",
                  fontWeight: "600",
                }}
              >
                სქესი
              </TableCell>
              <TableCell
                style={{
                  minWidth: "100px",
                  fontSize: "22px",
                  borderBottom: "1px solid #315C8E",
                  fontWeight: "600",
                }}
              >
                ქულები
              </TableCell>
              <TableCell
                style={{
                  minWidth: "100px",
                  fontSize: "22px",
                  borderBottom: "1px solid #315C8E",
                  fontWeight: "600",
                }}
              >
                პირადი ნომერი
              </TableCell>
              <TableCell
                style={{
                  minWidth: "100px",
                  fontSize: "22px",
                  borderBottom: "1px solid #315C8E",
                  fontWeight: "600",
                }}
              >
                Email
              </TableCell>
              <TableCell
                style={{
                  minWidth: "100px",
                  fontSize: "22px",
                  borderBottom: "1px solid #315C8E",
                  fontWeight: "600",
                }}
              >
                მობილური
              </TableCell>
              <TableCell
                style={{
                  minWidth: "100px",
                  fontSize: "22px",
                  borderBottom: "1px solid #315C8E",
                  fontWeight: "600",
                }}
              >
                დაბადების თარიღი
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  style={{
                    minWidth: "350px",
                    fontSize: "16px",
                    paddingLeft: "65px",
                    paddingRight: "15px",
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  style={{
                    minWidth: "250px",
                    fontSize: "16px",
                  }}
                >
                  {row.status}
                </TableCell>
                <TableCell
                  style={{
                    minWidth: "250px",
                    fontSize: "16px",
                  }}
                >
                  {row.sex}
                </TableCell>
                <TableCell style={{ minWidth: "250px", fontSize: "16px" }}>
                  {row.scores}
                </TableCell>
                <TableCell style={{ minWidth: "250px", fontSize: "16px" }}>
                  {row.idNumber}
                </TableCell>
                <TableCell style={{ minWidth: "250px", fontSize: "16px" }}>
                  {row.email}
                </TableCell>
                <TableCell style={{ minWidth: "250px", fontSize: "16px" }}>
                  {row.phoneNumber}
                </TableCell>
                <TableCell style={{ minWidth: "250px", fontSize: "16px" }}>
                  {row.birthdate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
