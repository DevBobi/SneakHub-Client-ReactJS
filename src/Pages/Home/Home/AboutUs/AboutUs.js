import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import support from '../../../../Images/bg_product.jpg'
import { NavLink } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const AboutUs = () => {
    return (
        <Container sx={{ height: '700px', display: 'flex', alignItems: 'center' }}>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Item>
                            <Box
                                item
                                xs={false}
                                sm={false}
                                md={12}
                                sx={{
                                    backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0267/0211/8947/files/about.jpg?v=1569835920)',
                                    backgroundColor: (t) =>
                                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                    backgroundSize: 'cover',
                                    height: '100%',
                                    width: '100%',
                                    overflow: 'hidden',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',

                                }}
                            >
                                <Grid container spacing={2}>

                                    <Grid item xs={4} sx={{
                                        m: 3,
                                        height: 200,
                                        // display: 'column',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                        alignItems: 'center'
                                    }}>

                                        <Box>
                                            <Typography sx={{ fontWeight: 'bold' }} variant="h4" gutterBottom component="div"> About Us</Typography>
                                            <Typography variant="body1" gutterBottom component="div"> We Are Here For You</Typography>
                                            <NavLink to="/aboutus" style={{ textDecoration: 'none' }}>
                                                <Button variant="outlined">About Us</Button>
                                            </NavLink>
                                        </Box>

                                    </Grid>
                                </Grid>


                            </Box>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default AboutUs;