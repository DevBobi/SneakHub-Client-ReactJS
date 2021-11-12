import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box, positions } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import useProduct from '../../../hooks/useProduct';
import bg from '../../../Images/bg_product.jpg'

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: ' flex',
    alignItems: 'center',
    height: 200,
    positions: "static"
}

const AllProducts = () => {
    const [products] = useProduct();

    const history = useHistory();

    const handleDetails = (id) => {
        const uri = `/productDetail/${id}`;
        history.push(uri);
    }

    return (
        <Box>
            <Box style={bannerBg} sx={{}}>
                <Container sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={4}>
                            <Box>
                                <Typography sx={{ color: 'white', fontSize: 60 }} variant="h3">
                                    All Products
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container>
                <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Grid item xs={4} sm={4} md={4}>
                            <Card sx={{ maxWidth: 400 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={product.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="h4" color="text.error">
                                            $ {product.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Available Size: {product.size}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => handleDetails(product?._id)} size="small" color="primary">
                                            Purchase
                                        </Button>
                                    </CardActions>
                                </CardActionArea>

                            </Card>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default AllProducts;