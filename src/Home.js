import React, {Fragment, useState} from 'react';
import Box from '@material-ui/core/Box';
import HeaderBar from "./HeaderBar";
import GamesGridList from "./GamesGridList";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function Home() {
    const [darkTheme, setTheme] = useState(true);
    const appliedTheme = createMuiTheme(darkTheme ? dark : light);

    return (
        <ThemeProvider theme={appliedTheme}>
            <CssBaseline/>
            <Fragment>
                <HeaderBar title={"Yadola Games"} darkTheme={darkTheme} changeTheme={theme => setTheme(theme)}/>
                <Box mx="auto" p={2} overflow="hidden">
                    <GamesGridList/>
                </Box>
            </Fragment>
        </ThemeProvider>
    );
}

const light = {
    palette: {
        type: "light"
    }
};

const dark = {
    palette: {
        type: "dark",
        background: {
            default: "#000000",
            paper: "#15181c",
        },
    }
};

export default Home;
