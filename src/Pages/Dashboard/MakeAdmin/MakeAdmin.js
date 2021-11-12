import { Alert, Button, Collapse, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = React.useState(true);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const proceed = window.confirm('Are you sure you want to Make Admin?');
        if (proceed) {
            const user = { email };
            fetch('http://localhost:5000/users/admin', {
                method: 'PUT',
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        console.log(data);
                        setSuccess(true);
                    }
                })
            e.preventDefault();
        }
    }

    return (
        <Container>
            <Box
                sx={{
                    mt: 5,
                    mx: 'auto',
                    width: 500,
                    borderRadius: 1,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3">
                    Make Admin
                </Typography>
                {success &&
                    <Box sx={{ width: '100%' }}>
                        <Collapse in={open}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                Made Admin Successfully!
                            </Alert>
                        </Collapse>
                    </Box>}
                <Box component="form" onSubmit={handleAdminSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2} sx={{ my: 3 }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Enter Email"
                                id="outlined-size-small"
                                name="name"
                                type="email"
                                onBlur={handleOnBlur}
                                size="small"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant='contained'
                        style={{ backgroundColor: '#5CE7ED', color: "black" }}
                    >Proceed Make Admin</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default MakeAdmin;