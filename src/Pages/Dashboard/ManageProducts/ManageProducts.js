import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Container, Typography } from '@mui/material';

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

const ManageProducts = () => {
    const [newProduct, setNewProduct] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = "https://safe-waters-12222.herokuapp.com/products";
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://safe-waters-12222.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProducts = newProduct.filter(product => product._id !== id)
                        setNewProduct(remainingProducts);
                    }
                })
        }
    };
    return (
        <Container>
            <Typography sx={{
                py: 2,
                mx: 'auto',
                width: 500,
                borderRadius: 1,
                textAlign: 'center',
            }}
                variant="h3"
            >Manage Products</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Image</StyledTableCell>
                            <StyledTableCell align="left">Product Title</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={row.img}
                                        sx={{ width: 70, height: 70 }}
                                    />
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.title}</StyledTableCell>
                                <StyledTableCell align="left">${row.price}</StyledTableCell>
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

export default ManageProducts;