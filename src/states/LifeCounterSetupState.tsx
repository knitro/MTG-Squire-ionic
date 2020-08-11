import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export interface Game {
    numberPlayers : number;
    lifeTotal : number;
}

export async function saveGame(g : Game){
    await Storage.set({
        key: 'game',
        value: JSON.stringify(g)
    });
}

let GameContext = createContext({} as Game);

function GameContextProvider(props : {children: React.ReactNode; }) {
    
    const [initialGame, setInitialGame] = useState({} as Game);

    useEffect(() => {
        Promise.resolve(Storage.get({key: 'game'}).then(
            (result) => {
                if(typeof result.value === 'string') {
                    setInitialGame(JSON.parse(result.value) as Game);
                }
            },
            (reason) => console.log("Failed to load game from storage because of:" + reason)
        ));
    }, []);

    return (
        <GameContext.Provider value={initialGame}>{props.children}</GameContext.Provider>
    )
}

let GameContextConsumer = GameContext.Consumer;

export { GameContext, GameContextProvider, GameContextConsumer};