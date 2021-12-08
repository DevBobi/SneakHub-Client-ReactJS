import React from 'react';
import banner from '../../../Images/banner-1.png';
import bg from '../../../Images/bg_slide-3.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import Bounce from 'react-reveal/Bounce';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: ' flex',
    alignItems: 'center',
    height: 500,

}

const Banner = () => {
    Aos.init();
    return (
        <Box style={bannerBg} sx={{ paddingY: "50px" }}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box sx={{ overflow: "hidden" }}>
                            <Bounce left cascade>
                                <Typography sx={{ color: 'white', fontSize: 60, overflow: "hidden" }} variant="h3">
                                    INTERSECTION <br />
                                    OF STYLE & SPORT.
                                </Typography>
                            </Bounce>
                            <Typography container variant="h6" sx={{ my: 3, fontSize: 13, fontWeigth: 300, color: 'gray' }}>
                                Whether you call them shoes, sneakers, runners, trainers, or kicks, we have you covered with the latest footwear to fit your style.
                            </Typography>
                            <NavLink to="/allProducts" style={{ textDecoration: 'none' }}>
                                <Button variant='contained' style={{ backgroundColor: '#5CE7ED', color: "black" }}>Explore</Button>
                            </NavLink>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{
                        display: ' flex',
                        alignItems: 'center'
                    }}
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    >
                        <img style={{ minWidth: '40px', maxwidth: '350px', px: 3 }} src={banner} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;