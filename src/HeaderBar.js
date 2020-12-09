import React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from "@material-ui/core/Grid";
import HomeIcon from '@material-ui/icons/Home';
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

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
        backgroundColor: 'transparent',
        color: '#147EFB',
        // filter: 'blur(2px)',
        // TODO - Add Blur Background Image
    },
}));

function HeaderBar(props) {
    const classes = useStyles();

    const themeIcon = props.darkTheme ? <Brightness3Icon fontSize="large"/> : <Brightness7Icon fontSize="large"/>;
    const themeIconTooltip = props.darkTheme ? "Change to Light Mode" : "Change to Dark Mode";

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
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
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Tooltip title={themeIconTooltip} arrow>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={() => props.changeTheme(!props.darkTheme)}>
                                    {themeIcon}
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </div>
    );
}

export default HeaderBar;