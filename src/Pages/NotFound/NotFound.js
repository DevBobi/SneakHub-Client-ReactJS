
import { Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../Images/404.png'

const NotFound = () => {
    return (
        <Container>
            <Box item xs={12} md={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2
                }}>

                <img style={{ height: "80vh", width: "90vh" }} src={notFound}
                    alt=""
                />
            </Box>
            <Grid sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 2
            }}>
                <NavLink style={{ textDecoration: "none" }} to="/">
                    <Button variant="outlined" color="error" >
                        Go Back
                    </Button>
                </NavLink>
            </Grid>
        </Container>
    );
};

export default NotFound;