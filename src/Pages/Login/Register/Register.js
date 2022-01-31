import * as React from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import PopupError from '../../Popup/PopupError';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link sx={{ textDecoration: "none" }} color="inherit" href="https://sneak-hub.web.app/">
                SneakHub
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const theme = createTheme();

const Register = () => {
    const [loginData, setLoginData] = React.useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            PopupError("Password Didn't Matched!");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    {!isLoading &&
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                        required
                                        fullWidth
                                        label="Your Name"
                                        autoFocus
                                        onBlur={handleOnBlur}
                                        name="name"
                                        id="standard-basic"
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        onBlur={handleOnBlur}
                                        id="standard-basic"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="standard-basic"
                                        label="Your Password"
                                        name="password"
                                        onBlur={handleOnBlur}
                                        type="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Re-type Password"
                                        name="password2"
                                        onBlur={handleOnBlur}
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <NavLink
                                        style={{ textDecoration: 'none' }}
                                        to='/login'>
                                        <Button variant="text">Already have an account? Please Login In</Button>
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </Box>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
};

export default Register;