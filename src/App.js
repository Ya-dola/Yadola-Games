import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            {/*<Route exact path="/YadolaGame/:gameId" component={ChampionHeatmap}/>*/}
        </BrowserRouter>
    );
}

export default App;
