import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import PopupSuccess from '../../Popup/PopupSuccess';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const proceed = window.confirm('Are you sure you want to Make Admin?');
        if (proceed) {
            const user = { email };
            fetch('https://safe-waters-12222.herokuapp.com/users/admin', {
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
                        PopupSuccess("create admin")
                    }
                })
            e.preventDefault();
        }
    }

    return (
        <Box>
            <Container
                sx={{
                    py: 2,
                    mx: 'auto',
                    width: 400,
                    borderRadius: 1,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3">
                    Make Admin
                </Typography>
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
                        color="success"
                        variant="contained"
                    >Proceed Make Admin</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default MakeAdmin;