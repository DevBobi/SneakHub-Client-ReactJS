import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../Shared/Navigation/Navigation';
import PurchaseModal from '../PurchaseModal/PurchaseModal';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

const verticalCenter = {
    display: ' flex',
    alignItems: 'center',
    height: 600,
}

const SignleProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const [bookingSuccess, setBookingSuccess] = useState(false)

    useEffect(() => {
        fetch('https://safe-waters-12222.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const matchedPd = products?.find(product => product?._id == id)
        setSingleProduct(matchedPd)
    }, [products]);

    const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    const [open, setOpen] = React.useState(true);

    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ paddingTop: "5px" }}>
                <Container sx={{ flexGrow: 1, p: 5 }}>
                    <Grid container spacing={2}>
                        <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                            <Box>
                                <Typography sx={{ fontSize: 60 }} variant="h3">
                                    {singleProduct?.title}
                                </Typography>
                                <Typography sx={{ fontSize: 40, color: "red" }} variant="h3">
                                    Price: ${singleProduct?.price}
                                </Typography>
                                <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeigth: 300, color: "green" }}>
                                    Size: {singleProduct?.size}
                                </Typography>
                                <Button onClick={handleBookingOpen} variant='contained' style={{ backgroundColor: '#5CE7ED', color: "black" }}>Purchase Now</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} style={verticalCenter} >
                            <img style={{ minWidth: '350px', maxwidth: '400px' }} src={singleProduct?.img} alt="" />
                        </Grid>
                    </Grid>
                </Container>
                <PurchaseModal
                    setBookingSuccess={setBookingSuccess}
                    singleProduct={singleProduct}
                    bookingOpen={bookingOpen}
                    handleBookingClose={handleBookingClose}
                ></PurchaseModal>
            </Box>
        </>
    );
};

export default SignleProduct;