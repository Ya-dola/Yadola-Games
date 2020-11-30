import React, {Fragment} from 'react';
import Box from '@material-ui/core/Box';
import HeaderBar from "./HeaderBar";
import GamesGridList from "./GamesGridList";

function HomePage() {
    return (
        <Fragment>
            <HeaderBar title={"Yadola Games"}/>
            <Box mx="auto" p={2} overflow="hidden">
                <GamesGridList/>
            </Box>
        </Fragment>
    );
}

export default HomePage;
