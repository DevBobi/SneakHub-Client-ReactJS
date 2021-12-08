import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {

    const theme = useTheme();
    const isMatches = useMediaQuery(theme.breakpoints.down('md'));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    // useAuth

    const { user, logout } = useAuth()


    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" style={{ backgroundColor: "white", color: "black" }}>
                    <Container>
                        <Toolbar>

                            <Box component="div" sx={{ flexGrow: 1 }}>
                                <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/'>
                                    <Typography variant="h4" >
                                        SneakHub
                                    </Typography>
                                </NavLink>
                            </Box>

                            {isMatches ? <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon id="basic-button"
                                    style={{ color: "black" }}
                                    aria-controls="basic-menu"
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick} />
                            </IconButton>
                                :
                                <Box>
                                    {user?.email ?
                                        <div>
                                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/allProducts'>
                                                <Button color="inherit">Products</Button>
                                            </NavLink>
                                            <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/dashboard'>
                                                <Button color="inherit">Dashboard</Button>
                                            </NavLink>

                                            <Button onClick={logout} color="error">Logout</Button>
                                        </div>
                                        :
                                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/login'>
                                            <Button style={{ color: 'black' }} color="inherit">Login</Button>
                                        </NavLink>
                                    }
                                </Box>
                            }


                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >

                                {user?.email ?
                                    <Grid sx={{ display: "flex", flexDirection: "column" }}>
                                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/allProducts'>
                                            <Button color="inherit">Products</Button>
                                        </NavLink>
                                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/dashboard'>
                                            <Button color="inherit">Dashboard</Button>
                                        </NavLink>
                                        <Button variant="outlined" color="error" onClick={logout} >Logout</Button>
                                    </Grid>
                                    :
                                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/login'>
                                        <Button color="inherit">Login</Button>
                                    </NavLink>}

                            </Menu>
                        </Toolbar>
                    </Container>
                </AppBar>

            </Box>

        </>
    );
};

export default Navigation;