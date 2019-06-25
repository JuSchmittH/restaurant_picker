import React from 'react';
import { Toolbar, AppBar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background: '#9ABD97',
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.root}>
                        Restaurant Picker
                    </Typography>
                    <Button color="inherit">Create New list</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
