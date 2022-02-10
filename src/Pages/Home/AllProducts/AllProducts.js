import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useProduct from '../../../hooks/useProduct';
import bg from '../../../Images/bg_product.jpg'
import Footer from '../../Shared/Footer/Footer';
import { FadeLoader } from "react-spinners";
import Rating from '@mui/material/Rating';
import AOS from 'aos';

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
    AOS.init();
    const { products } = useProduct();
    const history = useHistory();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            if (products) {
                setLoading(false);
            }
        });
    }, [products]);


    const handleDetails = (id) => {
        const uri = `/productDetail/${id}`;
        history.push(uri);
    }

    return (
        <Box >
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
                {loading ? (
                    <div className="spinner-box">
                        <FadeLoader color="#777777" />
                    </div>
                ) : (
                    <Grid
                        data-aos="fade-up"
                        container
                        spacing={{ xs: 2, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map(product => <Grid item xs={4} sm={4} md={4}>
                                <Card sx={{ maxWidth: 400 }} data-aos="zoom-in">
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
                                            <Typography variant="h4" color="error">
                                                $ {product.price}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Available Size: {product.size}
                                            </Typography>
                                        </CardContent>
                                        <CardActions
                                            style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Rating
                                                size="small"
                                                value={product?.rating}
                                                readOnly />

                                            <Button
                                                onClick={() => handleDetails(product?._id)}
                                                size="small"
                                                color="primary">
                                                Purchase
                                            </Button>
                                        </CardActions>
                                    </CardActionArea>

                                </Card>
                            </Grid>)
                        }
                    </Grid>
                )}
            </Container>
            <Footer />
        </Box>
    );
};

export default AllProducts;