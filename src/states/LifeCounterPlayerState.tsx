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
}

export interface Players {
    players : Player[]
}


export function updatePlayer(players : Player[],player : number, change : number){
    players[player].lifeTotal += change;
    savePlayers(players)
}

export function createPlayers(g : Game){
    let p : Player[] = [];
    for (let index = 0; index < g.numberPlayers; index++) {
        p.push({
            lifeTotal : g.lifeTotal,
            valueW : 1,
            valueU : 2,
            valueB : 3,
            valueR : 4,
            valueG : 5
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
                    console.log(result.value);
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
