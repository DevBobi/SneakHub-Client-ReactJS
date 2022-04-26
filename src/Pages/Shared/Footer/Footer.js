import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box
            sx={{ bgcolor: "#212121", color: "white" }}
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={5} sx={{ pt: 5 }}>
                    <Grid item xs={12} sm={4} >
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Typography variant="body1">
                                Contact
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1">
                                Support
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1">
                                Privacy Policy
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Account</Box>
                        <Box>
                            <Typography variant="body1">
                                Login
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1">
                                Register
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Messages</Box>
                        <Box>
                            <Typography variant="body1">
                                Backup
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1">
                                History
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1">
                                Roll
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0, }}>SneakHub &reg;{new Date().getFullYear()}</Box>
            </Container>
        </Box>
    );
};

export default Footer;