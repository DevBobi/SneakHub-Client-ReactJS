import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import banner from '../../../Images/dashboardBanner.svg';

const verticalCenter = {
    display: ' flex',
    alignItems: 'center',
    height: 300,

}

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <Box>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box data-aos="fade-up">
                            <Typography sx={{ color: 'black', fontSize: 40, py: "15px" }} variant="h3">
                                Welcome To Dashboard <br />
                                <span> {user?.displayName}</span>
                            </Typography>
                            <NavLink to="/allProducts" style={{ textDecoration: 'none' }}>
                                <Button variant='contained' style={{ backgroundColor: '#5CE7ED', color: "black" }}>Make Another Order</Button>
                            </NavLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: ' flex',
                        alignItems: 'center'
                    }}
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <img style={{ minWidth: '300px', maxwidth: '40px', px: 3 }} src={banner} alt="dashboard-image" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DashboardHome;