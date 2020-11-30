import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    championImage: {
        height: 200,
    },
    positionIcon: {
        height: 75,
        width: 75,
    },
});


function GameCard({gameId, gameName, gameImage, gameDescription}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link to={"/Champion/" + gameId} style={{color: 'inherit', textDecoration: 'inherit'}}>
                <CardActionArea>
                    <CardMedia className={classes.championImage} image={gameImage} title={gameName}/>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            {gameName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {gameDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
}

export default GameCard;
