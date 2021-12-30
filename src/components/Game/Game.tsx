import React from "react";
import axios from "axios";
// import { getDateTRN } from "../../api/api.js";

const Game = () => {

    // profile/{platform}/{platformUserIdentifier}

    const instance = axios.create({
        baseURL: "https://public-api.tracker.gg/v2/csgo/standard/",
        headers: {
            "Content-Type": "application/json",
            "TRN-Api-Key": "7e35b9b7-dde1-4ef6-8fab-647a5d8e9e33"
        }
    });
  
  
    const getDateTRN = {
      getTRN() {
          return (
            //   console.log(instance.get(`profile/steam/76561198008049283`))
            instance.get(`https://public-api.tracker.gg/v2/csgo/standard/profile/steam/76561198008049283`)
                .then((response) => {
                    console.log(`response`)
                })
          )
      }
    }

    const getStartGame = () => {

        getDateTRN.getTRN()

        return (
            <div>
                Hello world
            </div>
        )
    }
    
    return (
        <div>
            This my first game:)
            maby laters....
            <div className="years">Прощай 2021 last commit</div>
            <button onClick={getStartGame} >
                Start Game
            </button>
            {getStartGame}
        </div>
    )
}

export default Game;