import { Avatar, Button, Container, Typography } from '@mui/material';
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
import { Box } from '@mui/system';
import PopupError from '../../Popup/PopupError';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

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

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://safe-waters-12222.herokuapp.com/myorders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user?.email]);

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
        <Box

        >
            {orders?.length !== 0 ?
                <Box
                >
                    <TableContainer Container component={Paper}>
                        <Typography sx={{
                            py: 2,
                            textAlign: 'center',
                        }}
                            variant="h3"
                        >My Orders: {orders.length}
                        </Typography>
                        <Table aria-label="orders table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Product Image</StyledTableCell>
                                    <StyledTableCell>Orderd Item</StyledTableCell>
                                    <StyledTableCell align="right">User</StyledTableCell>
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
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={row?.singleProduct?.img}
                                                sx={{ width: 70, height: 70 }}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            {row?.singleProduct?.title}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.name}</StyledTableCell>
                                        <StyledTableCell align="right">{row.phone}</StyledTableCell>
                                        <StyledTableCell align="right">{row.date}</StyledTableCell>
                                        <StyledTableCell align="right">{row.status}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Button
                                                onClick={() => handleDelete(row?._id)}
                                                color="error">
                                                <DeleteOutlinedIcon />
                                            </Button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                :
                <Box
                    sx={{
                        textAlign: "center",
                    }}
                >
                    <Box>
                        <Typography sx={{
                            py: 2,

                        }}
                            variant="h4"
                        >No Orders Found!
                        </Typography>
                        <img src="https://organickle.com/images/no-order.svg" alt="" />
                    </Box>
                </Box>


            }

        </Box >
    );
};

export default MyOrders;