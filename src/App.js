import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./HomePage";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={HomePage}/>
            {/*<Route exact path="/Champion/:championId" component={ChampionHeatmap}/>*/}
        </BrowserRouter>
    );
}

export default App;
