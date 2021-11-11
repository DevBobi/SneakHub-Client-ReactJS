import React from 'react';
import banner from '../../../Images/banner-1.png';
import bg from '../../../Images/bg_slide-3.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: ' flex',
    alignItems: 'center',
    height: 650,

}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ paddingTop: "5px" }}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography sx={{ color: 'white', fontSize: 60 }} variant="h3">
                                Collection <br />
                                Sneaker
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeigth: 300, color: 'gray' }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos praesentium nam maiores dolor aliquam magnam voluptas minima
                            </Typography>
                            <NavLink to="/allProducts" style={{ textDecoration: 'none' }}>
                                <Button variant='contained' style={{ backgroundColor: '#5CE7ED', color: "black" }}>Explore</Button>
                            </NavLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ minwidth: '350px', maxWidth: "500px" }} src={banner} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;