import React, { createContext, useState, useEffect } from 'react';

import { Plugins } from '@capacitor/core';

////////////////////////
/*Local Initialisation*/
////////////////////////

export var emptySearch : SearchState = {
  cardName: "",
  imageLink: "",
  manaCost: "",
  prices: {
    scryfallPricing: 0
  },
  fullType: "",
  oracleText : "",
  set : {
    setName: "",
    setCode: "",
    imageLink: "" 
  }
};

let storageKey = "search";

////////////////////////
/*Interfaces for the SearchState*/
////////////////////////


export interface PriceProps {
  scryfallPricing : number //Remove if TCG/CK/SCG is implemented
}
  
export interface SetInformation {
  setName : string
  setCode : string
  imageLink : string
}

/**
 * Interface that contains the parameters for the Class
 */
export interface SearchState {
  cardName: string
  imageLink: string
  manaCost: string
  prices: PriceProps
  fullType : string
  oracleText : string
  set : SetInformation
}

const { Storage } = Plugins;

export async function saveSearchState(currentSearchState : SearchState) {
  await Storage.set({
    key: storageKey,
    value: JSON.stringify(currentSearchState)
  });
}

let SearchStateContext = createContext({} as SearchState);

function SearchStateContextProvider(props: { children: React.ReactNode; }) {
    
    const [initialSearchState, setInitialSearchState] = useState(emptySearch as SearchState);

    useEffect(() => {
        Promise.resolve(Storage.get({key: storageKey}).then(
            (result) => {
                if (typeof result.value === 'string') {
                  setInitialSearchState(JSON.parse(result.value) as SearchState);
                }
            },
            (reason) => console.log("Failed to load state from storage because of: " + reason)
        ));
    }, []); // Nifty trick with useEffect from: https://css-tricks.com/run-useeffect-only-once/

    return (
        <SearchStateContext.Provider value={initialSearchState}>{props.children}</SearchStateContext.Provider>
    )
}

let SearchStateContextConsumer = SearchStateContext.Consumer;

export { SearchStateContext, SearchStateContextProvider, SearchStateContextConsumer };
