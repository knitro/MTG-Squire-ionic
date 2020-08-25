import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { Plugins } from '@capacitor/core';
import { Game } from './LifeCounterSetupState';
const { Storage } = Plugins;


export interface Player{
    lifeTotal : number;
    valueW : number;
    valueU : number;
    valueB : number;
    valueR : number;
    valueG : number;
    valueC : number;
}

export interface Players {
    players : Player[]
}


export function updatePlayer(players : Player[],player : number, change : number, option : string){
    if(option == 'lifeTotal'){
        players[player].lifeTotal += change;
    } else if(option == 'valueW'){
        players[player].valueW += change;
    } else if(option == 'valueU'){
        players[player].valueU += change;
    } else if(option == 'valueB'){
        players[player].valueB += change;
    } else if(option == 'valueR'){
        players[player].valueR += change;
    } else if(option == 'valueG') {
        players[player].valueG += change;
    } else {
        players[player].valueC += change;
    }
    savePlayers(players)
}

export function createPlayers(g : Game){
    let p : Player[] = [];
    for (let index = 0; index < g.numberPlayers; index++) {
        p.push({
            lifeTotal : g.lifeTotal,
            valueW : 0,
            valueU : 0,
            valueB : 0,
            valueR : 0,
            valueG : 0,
            valueC : 0,
        });        
    }
    savePlayers(p)
}

export async function savePlayers(players : Player[]) {
    await Storage.set({
        key: 'players',
        value: JSON.stringify(players)
    });
}

let PlayersContext = createContext({} as Players);

function PlayersContextProvider(props: { children: React.ReactNode; }) {
    
    const [initialPlayers, setInitialPlayers] = useState([] as Player[]);

    useEffect(() => {
        Promise.resolve(Storage.get({key: 'players'}).then(
            (result) => {
                if (typeof result.value === 'string') {
                    setInitialPlayers(JSON.parse(result.value) as Player[]);
                }
            },
            (reason) => console.log("Failed to load players from storage because of: " + reason)
        ));
    }, []);
    return (
        <PlayersContext.Provider value={{players : initialPlayers}}>{props.children}</PlayersContext.Provider>
    )
}

let PlayersContextConsumer = PlayersContext.Consumer;

export { PlayersContext, PlayersContextProvider, PlayersContextConsumer };
