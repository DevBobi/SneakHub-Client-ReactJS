
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../Images/404_space.jpg'

const notFound = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: ' flex',
    alignItems: 'center',
    height: 400,

}

const NotFound = () => {
    return (
        <Box style={notFound} sx={{ flexGrow: 1 }}>
            <Container sx={{ flexGrow: 1 }}>

            </Container>
        </Box>
    );
};

export default NotFound;