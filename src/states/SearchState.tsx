////////////////////////
/*Imports*/
////////////////////////

import React, { createContext, useState, useEffect } from 'react';
import { Plugins } from '@capacitor/core';

////////////////////////
/*Local Initialisation*/
////////////////////////

const { Storage } = Plugins;

const storageKey = "search"; // String that dictates the string that the search is stored under in capacitor.

/**
 * The Empty Search Constant: Used for "Blank" Representations of a SearchState.
 */
export const emptySearch : SearchState = {
  cardName:   "Empty Card",
  imageLink:  "https://media.magic.wizards.com/image_legacy_migration/images/magic/daily/features/feat238a_blank1.jpg",
  manaCost:   "{0}",
  prices: {
    scryFallPricing_nonfoil:  "0",
    scryFallPricing_foil:     "0"
  },
  fullType:   "Full Type Here",
  oracleText: "Oracle Text Here",
  set : {
    setName:    "Unknown Set",
    setCode:    "???",
    imageLink:  "Blank" 
  },
  legality: {
    standard:   "Banned",
    future:     "Banned",
    historic:   "Banned",
    pioneer:    "Banned",
    modern:     "Banned",
    legacy:     "Banned",
    pauper:     "Banned",
    vintage:    "Restricted",
    penny:      "Banned",
    commander:  "Banned",
    brawl:      "Banned",
    duel:       "Banned",
    oldschool:  "Banned"
  },
  misc: {
    reserved: true,
    foil:     false,
    nonfoil:  false,
    promo:    false,
    reprint:  false,
    collector_number: "000",
    rarity:   "Mythic",
    frame:    "2015",
    artist:   "Wizards of the Coast",
    released: "Now"
  },
  rulings: [
    "Ruling 1:",
    "Ruling 2:"
  ]
};

////////////////////////
/*SearchState*/
////////////////////////

/**
 * SearchState Interface, used to store information about a single card.
 */
export interface SearchState {
  cardName:   string
  imageLink:  string
  manaCost:   string
  fullType:   string
  oracleText: string
  prices:     PriceProps
  set :       SetInformation
  legality:   LegalityInformation
  misc:       MiscInformation 
  rulings:    string[]
}


////////////////////////
/*Interfaces for the SearchState*/
////////////////////////

/**
 * Stores the information about the Price of the Card
 */
export interface PriceProps {
  scryFallPricing_nonfoil:  string
  scryFallPricing_foil:     string
}

/**
 * Stores the information about the set that the card is in
 */
export interface SetInformation {
  setName:    string
  setCode:    string
  imageLink:  string  //For Future Iterations of the Program
}

/**
 * Stores the information of the card's legality in all WoTc recognised formats
 */
export interface LegalityInformation {
  standard:   string
  future:     string
  historic:   string
  pioneer:    string
  modern:     string
  legacy:     string
  pauper:     string
  vintage:    string
  penny:      string
  commander:  string
  brawl:      string
  duel:       string
  oldschool:  string
}

/**
 * Stores any Miscellaneous Information about the CArd
 */
export interface MiscInformation {
  reserved: boolean  //Is on the reserve list
  foil:     boolean  //Does foil exist
  nonfoil:  boolean  //Does non-foil exist
  promo:    boolean  //Is it a promo variant
  reprint:  boolean  //Is the card a reprint
  collector_number: string //Collector number of this variant of the card
  rarity:   string  //Rarity of the card
  frame:    string  //Frame style of the card
  artist:   string  //Artist
  released: string //Date of release
}

////////////////////////
/*Capacitor Storage*/
////////////////////////

export async function saveSearchState(currentSearchState : SearchState) {

  let valueToSave : string = JSON.stringify(currentSearchState);

  await Storage.set({
    key: storageKey,
    value: valueToSave
  });

}

export async function updateSaveStateWithRulings(rulings : string[]) {

  let currentSearchState : SearchState = emptySearch;

  Promise.resolve(Storage.get({key: storageKey}).then(
    (result) => {
        if (typeof result.value === 'string') {
          currentSearchState = JSON.parse(result.value) as SearchState;
          currentSearchState.rulings = rulings;

          console.log(currentSearchState.rulings[0]);

          Storage.set({
            key: storageKey,
            value: JSON.stringify(currentSearchState)
          });
        }
    },
    (reason) => console.log("Failed to load state from storage because of: " + reason)
  ));

  //Don't update if the storage value could not be retrieved.
  if (currentSearchState == emptySearch) {
    return;
  }
}

let SearchStateContext = createContext({} as SearchState);

function SearchStateContextProvider(props: { children: React.ReactNode; }) {
    
    const [initialSearchState, setInitialSearchState] = useState(emptySearch as SearchState);

    //Attempt to get Storage Value: Code based off Lecturer's Sample Code
    useEffect(() => {
        Promise.resolve(Storage.get({key: storageKey}).then(
            (result) => {
                if (typeof result.value === 'string') {
                  setInitialSearchState(JSON.parse(result.value) as SearchState);
                }
            },
            (reason) => console.log("Failed to load state from storage because of: " + reason)
        ));
    }, []);

    return (
        <SearchStateContext.Provider value={initialSearchState}>{props.children}</SearchStateContext.Provider>
    )
}

let SearchStateContextConsumer = SearchStateContext.Consumer;

export { SearchStateContext, SearchStateContextProvider, SearchStateContextConsumer };
