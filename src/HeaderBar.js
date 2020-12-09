import React, {useState} from 'react';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
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
        color: '#147EFB',
    },
    ThemeButton: {
        color: '#147EFB',
    },
    title: {
        display: 'block',
        align: "center"
    },
    appBar: {
        filter: 'blur(2px)',
    },
}));

function HeaderBar(props) {
    const classes = useStyles();

    const themeIcon = props.darkTheme ? <Brightness3Icon fontSize="large"/> : <Brightness7Icon fontSize="large"/>;
    const themeIconTooltip = props.darkTheme ? "Change to Light Mode" : "Change to Dark Mode";

    const appliedAppBarTheme = createMuiTheme(AppBarTheme);
    const [appBarTheme, setAppBarTheme] = useState("primary");
    const changeAppBarTheme = () => {
        appBarTheme === "primary" ? setAppBarTheme("secondary") : setAppBarTheme("primary");
    };

    return (
        <div className={classes.root}>
            <ThemeProvider theme={appliedAppBarTheme}>
                <AppBar position="fixed" color={appBarTheme}>
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
                                        className={classes.ThemeButton}
                                        color="inherit"
                                        onClick={() => {
                                            props.changeTheme(!props.darkTheme);
                                            changeAppBarTheme();
                                        }}>
                                        {themeIcon}
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Toolbar/>
            </ThemeProvider>
        </div>
    );
}

const AppBarTheme = {
    palette: {
        primary: {
            main: "rgba(22,29,31,0.6)",
            // main: "rgba(21, 24, 28, 0.6)",
            contrastText: '#FFFFFF',
            divider: '#FFF',
        },
        secondary: {
            main: "rgba(0, 0, 0, 0.14)",
            contrastText: '#000000',
        }
    }
};

export default HeaderBar;