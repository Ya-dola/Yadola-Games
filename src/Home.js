import React, {Fragment} from 'react';
import Box from '@material-ui/core/Box';
import HeaderBar from "./HeaderBar";
import GamesGridList from "./GamesGridList";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Home() {
    const preferredColorScheme = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: preferredColorScheme ? 'dark' : 'light',
                },
            }),
        [preferredColorScheme],
    );

    return (

        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Fragment>
                <HeaderBar title={"Yadola Games"}/>
                <Box mx="auto" p={2} overflow="hidden">
                    <GamesGridList/>
                </Box>
            </Fragment>
        </ThemeProvider>
    );
}

export default Home;
