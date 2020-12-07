import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from "@material-ui/core/Grid";
import HomeIcon from '@material-ui/icons/Home';
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const useStyles = theme => ({
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
});

class HeaderBar extends Component {
    state = {
        themeState: true,
    }

    changeTheme = () => {
        this.setState({
            themeState: !this.state.themeState,
        });
    }

    render() {

        const {classes} = this.props;
        const title = this.props.title;
        const themeState = this.state.themeState;

        const themeIcon = themeState ? <Brightness3Icon fontSize="large"/> : <Brightness7Icon fontSize="large"/>;
        const themeIconTooltip = themeState ? "Change to Light Mode" : "Change to Dark Mode";

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
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Tooltip title={themeIconTooltip} arrow>
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        onClick={this.changeTheme}>
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
}

export default withStyles(useStyles)(HeaderBar);