import React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    HomeButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'block',
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(2),
        align: "right"
    },
    appBar: {
        backgroundColor: '#333333',
        color: '#FFFFFF',
    },
}));

function HeaderBar({title}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                    <Grid
                        container
                        justify={"space-between"}
                        alignItems={"baseline"}>
                        <Grid item>
                            <Tooltip title={"Home"} arrow>
                                <IconButton
                                    edge="start"
                                    className={classes.HomeButton}
                                    color="inherit">
                                    <Link to={"/"} style={{color: 'inherit', textDecoration: 'inherit'}}>
                                        <HomeIcon fontSize="large"/>
                                    </Link>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Typography
                                className={classes.title}
                                variant="h6"
                                noWrap>
                                {title}
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default HeaderBar;