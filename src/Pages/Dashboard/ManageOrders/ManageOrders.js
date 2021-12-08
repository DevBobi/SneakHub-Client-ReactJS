import { Avatar, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
import PopupError from '../../Popup/PopupError';
import PopupSuccess from '../../Popup/PopupSuccess';

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
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        const url = "https://safe-waters-12222.herokuapp.com/allorders";
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [status, orders]);

    const updateStatus = (id) => {
        axios.put(`https://safe-waters-12222.herokuapp.com/updateOrder`, { id })
            .then(res => PopupSuccess("orderApproved"))
            .then((data) => setStatus(true))
    };

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://safe-waters-12222.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        PopupError('Order Deleted!');
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders);
                    }
                })
        }
    };
    return (
        <Box>
            <Typography sx={{
                py: 2,
                mx: 'auto',
                textAlign: 'center',
            }}
                variant="h3"
            >All Orders: {orders.length}</Typography>
            <Container >
                <TableContainer sx={{ minWidth: 50 }} component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Product Image</StyledTableCell>
                                <StyledTableCell>Product Name</StyledTableCell>
                                <StyledTableCell align="left">Contact</StyledTableCell>
                                <StyledTableCell align="left">Date</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>
                                <StyledTableCell align="left">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row, index) => (
                                <StyledTableRow key={row._id}>
                                    <StyledTableCell component="th" scope="row">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={row?.singleProduct?.img}
                                            sx={{ width: 70, height: 70 }}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row?.singleProduct?.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.phone}</StyledTableCell>
                                    <StyledTableCell align="left">{row.date}</StyledTableCell>
                                    <StyledTableCell align="left">
                                        {(row?.status === "Approved") ?

                                            <Button color="success">{row?.status}</Button>
                                            :
                                            <Button
                                                onClick={() => updateStatus(row._id)}
                                                color="error">{row?.status}</Button>

                                        }
                                    </StyledTableCell>
                                    <StyledTableCell align="left">

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
        </Box>
    );
};

export default ManageOrders;

