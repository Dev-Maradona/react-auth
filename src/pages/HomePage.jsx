import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">
                            <Link to="/login"
                                style={{ textDecoration: 'none', color: 'white' }}>
                                Login
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/register"
                                style={{ textDecoration: 'none', color: 'white' }}>
                                Register
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default HomePage