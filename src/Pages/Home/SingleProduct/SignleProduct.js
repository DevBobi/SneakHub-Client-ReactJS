import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const verticalCenter = {
    display: ' flex',
    alignItems: 'center',
    height: 600,

}

const SignleProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    console.log(products);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const matchedPd = products?.find(product => product?._id == id)
        setSingleProduct(matchedPd)
        console.log(singleProduct)
    }, [products]);

    return (
        <Box sx={{ paddingTop: "5px" }}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography sx={{ fontSize: 60 }} variant="h3">
                                {singleProduct?.title}
                            </Typography>
                            <Typography sx={{ fontSize: 60 }} variant="h3">
                                Price: {singleProduct?.price}
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeigth: 300 }}>
                                Size: {singleProduct?.size}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ minWidth: '350px', maxwidth: '400px' }} src={singleProduct?.img} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SignleProduct;