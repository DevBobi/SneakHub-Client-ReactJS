import { Container, Typography } from '@mui/material';
import React from 'react';

const Payment = () => {
    return (
        <Container
            sx={{
                py: 2,
                mx: 'auto',
                width: 400,
                borderRadius: 1,
                textAlign: 'center',
            }}
        >
            <Typography variant="h4">
                Payment Is Comming Soon..
            </Typography>
        </Container>
    );
};

export default Payment;