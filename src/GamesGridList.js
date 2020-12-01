import React, {useEffect, useState} from "react";
// import firebase from "./firebase";
import Grid from "@material-ui/core/Grid";
import GameCard from "./GameCard";

// function useChampions() {
//     const [champions, setChampions] = useState([]);
//
//     useEffect(() => {
//         firebase
//             .firestore()
//             .collection('champions')
//             .onSnapshot((snapshot) => {
//                 const championsData = snapshot.docs.map((doc) => ({
//                     id: doc.id,
//                     championName: doc.data().championName,
//                     championImage: doc.data().championImage,
//                     championPosition: doc.data().championPosition,
//                     championPositionImage: doc.data().championPositionImage,
//                 }));
//
//                 setChampions(championsData)
//             })
//     }, []);
//     return champions;
// }

const GamesGridList = () => {
    // const champions = useChampions();

    // return <Grid container spacing={2} style={{padding: '24px'}}>
    //     {champions.map((champion) =>
    //         <Grid key={champion.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
    //             <ChampionCard championId={champion.id}
    //                           championName={champion.championName}
    //                           championImage={champion.championImage}
    //                           championPosition={champion.championPosition}
    //                           championPositionImage={champion.championPositionImage}
    //             />
    //         </Grid>
    //     )}
    // </Grid>

    return <Grid container spacing={2} style={{padding: '24px'}}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <GameCard gameId={"timeEluder"}
                      gameName={"Time Eluder"}
                      // gameImage={champion.championImage}
                      gameDescription={"gameDescription"}
            />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <GameCard gameId={"sk-uash"}
                      gameName={"Sk-uash"}
                      // gameImage={champion.championImage}
                      gameDescription={"gameDescription"}
            />
        </Grid>
    </Grid>
};

export default GamesGridList;