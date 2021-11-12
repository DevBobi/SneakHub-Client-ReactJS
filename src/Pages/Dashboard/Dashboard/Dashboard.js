import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button, Grid } from '@mui/material';
import AddProducts from '../AddProduct/AddProducts';
import { Add, AdminPanelSettings, Home, Logout, ProductionQuantityLimits, ShoppingBag } from '@mui/icons-material';
import MyOrders from '../MyOrders/MyOrders';
import ManageOrders from '../ManageOrders/ManageOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 220;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { logout, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {!admin && <Box>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                        <ListItem button>
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}`}>
                        <ListItem button>
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/myOrders`}>
                        <ListItem button>
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="My Orders" />
                        </ListItem>
                    </Link>

                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                        <ListItem button>
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Review" />
                        </ListItem>
                    </Link>
                </Box>}

                {admin &&
                    <Box>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
                            <ListItem button>
                                <ListItemIcon>
                                    <Home></Home>
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                        </Link>

                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/addProducts`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <Add></Add>
                                </ListItemIcon>
                                <ListItemText primary="Add Products" />
                            </ListItem>
                        </Link>

                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageOrders`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ShoppingBag></ShoppingBag>
                                </ListItemIcon>
                                <ListItemText primary="All Orders" />
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageProducts`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ProductionQuantityLimits></ProductionQuantityLimits>
                                </ListItemIcon>
                                <ListItemText primary="Manage Products" />
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/makeAdmin`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <AdminPanelSettings></AdminPanelSettings>
                                </ListItemIcon>
                                <ListItemText primary="Make Admin" />
                            </ListItem>
                        </Link>
                    </Box>
                }
                <Divider />
                <Link style={{ textDecoration: 'none', color: 'black' }} onClick={logout}>
                    <ListItem button>
                        <ListItemIcon>
                            <Logout></Logout>
                        </ListItemIcon>
                        <ListItemText primary="LogOut" />
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
