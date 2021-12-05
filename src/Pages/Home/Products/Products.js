import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import useProduct from '../../../hooks/useProduct';
import Product from '../Product/Product';
import Bounce from 'react-reveal/Bounce';
import './Products.css'

const Products = () => {
    const [products] = useProduct();
    const newProduct = products.slice(0, 6);

    return (
        <Box >
            <Container>
                <Bounce left cascade>
                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                        NEW ARRIVALS
                    </Typography>
                </Bounce>
                <Grid container spacing={{ xs: 3, md: 3 }} sx={{ mb: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        newProduct.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;