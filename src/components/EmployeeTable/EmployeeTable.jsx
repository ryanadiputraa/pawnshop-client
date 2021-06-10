import {
    withStyles,
    Paper,
    Table,
    TableContainer,
    TableCell,
    TableRow,
    TableHead,
    TableBody,
} from "@material-ui/core";
import { useState } from "react";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import tableStyle from "../Table/tableStyle";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const headers = [
    "ID",
    "Nama",
    "Jenis Kelamin",
    "Tanggal Lahir",
    "Alamat",
    "Password",
];

export default function EmployeeTable({ data, setIsSuccess }) {
    const classes = tableStyle();
    const [openDetail, setOpenDetail] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    const handleSelectData = (data) => {
        setOpenDetail(true);
        setSelectedData(data);
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="data-table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) =>
                            header === "Nama" ? (
                                <StyledTableCell key={header}>
                                    {header}
                                </StyledTableCell>
                            ) : (
                                <StyledTableCell key={header} align="center">
                                    {header}
                                </StyledTableCell>
                            )
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((d) => (
                        <TableRow
                            className={classes.dataRow}
                            onClick={() => handleSelectData(d)}
                            key={d.id}
                        >
                            <TableCell align="center">{d.id}</TableCell>
                            <TableCell component="th" scope="row">
                                {`${d.firstname} ${d.lastname}`}
                            </TableCell>
                            <TableCell align="center">{d.gender}</TableCell>
                            <TableCell align="center">
                                {d.birthdate.substring(0, 10)}
                            </TableCell>
                            <TableCell align="center">{d.address}</TableCell>
                            <TableCell align="center">{d.password}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <EmployeeDetail
                openModal={openDetail}
                setOpenModal={setOpenDetail}
                data={selectedData}
                setIsSuccess={setIsSuccess}
            />
        </TableContainer>
    );
}
