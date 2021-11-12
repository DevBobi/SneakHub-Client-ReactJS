import { Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Box } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const ManageOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        const url = "http://localhost:5000/allorders";
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [status, orders]);

    const updateStatus = (id) => {
        axios.put(`http://localhost:5000/updateOrder`, { id })
            .then(res => alert("Order Approved"))
            .then((data) => setStatus(true))
    };

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders);
                    }
                })
        }
    };
    return (
        <Container>
            <Typography sx={{
                mb: 5,
                mx: 'auto',
                width: 500,
                borderRadius: 1,
                textAlign: 'center',
            }}
                variant="h3"
            >All Orders: {orders.length}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ Width: 1000 }} aria-label="orders table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Orderd Item</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Contact</StyledTableCell>
                            <StyledTableCell align="right">Date</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row, index) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {row?.singleProduct?.title}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.email}</StyledTableCell>
                                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                                <StyledTableCell align="right">{row.date}</StyledTableCell>
                                <StyledTableCell align="right">
                                    {(row?.status === "Approved") ?

                                        <Button color="success">{row?.status}</Button>
                                        :
                                        <Button
                                            onClick={() => updateStatus(row._id)}
                                            color="error">{row?.status}</Button>

                                    }
                                </StyledTableCell>
                                <StyledTableCell align="right">

                                    <Button
                                        onClick={() => handleDelete(row?._id)}
                                        color="error">Delete</Button>

                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageOrders;

