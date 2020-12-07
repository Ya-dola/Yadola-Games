import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
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
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
                {/*<Route exact path="/YadolaGame/:gameId" component={ChampionHeatmap}/>*/}
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
