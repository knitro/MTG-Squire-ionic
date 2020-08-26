////////////////////////
/*Imports*/
////////////////////////

import { Plugins } from '@capacitor/core';

////////////////////////
/*Local Initialisation*/
////////////////////////

const { Storage } = Plugins;

const singleStorageKey    : string = "single";    // String that dictates the string that the SearchState is stored under in capacitor.
const multipleStorageKey  : string = "multiple";  // String that dictates the string that the search request is stored under in capacitor.

/**
 * The Empty Search Constant: Used for "Blank" Representations of a SearchState.
 */
export const emptySearch : SearchState = {
  cardName:   "Empty Card",
  imageLink:  "https://media.magic.wizards.com/image_legacy_migration/images/magic/daily/features/feat238a_blank1.jpg",
  imageOnlyLink: "",
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
    released: "Now",
    digital_only: false
  },
  rulings: [
    "Ruling 1: Sample Ruling made up",
    "Ruling 2: Sample Ruling made up"
  ],
  otherPrints: [],
  api_uri: "ERROR"
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
  imageOnlyLink: string
  manaCost:   string
  fullType:   string
  oracleText: string
  prices:     PriceProps
  set :       SetInformation
  legality:   LegalityInformation
  misc:       MiscInformation 
  rulings:    string[]
  otherPrints:SearchState[]
  api_uri:    string
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
 * Stores the information of the card's legality in all WOTC recognised formats
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
  reserved: boolean         //Is on the reserve list
  foil:     boolean         //Does foil exist
  nonfoil:  boolean         //Does non-foil exist
  promo:    boolean         //Is it a promo variant
  reprint:  boolean         //Is the card a reprint
  collector_number: string  //Collector number of this variant of the card
  rarity:   string          //Rarity of the card
  frame:    string          //Frame style of the card
  artist:   string          //Artist
  released: string          //Date of release
  digital_only : boolean    //Is the card a digital release only?
}

////////////////////////
/*Capacitor Storage for Single Storage*/
////////////////////////

/**
 * Saves a single Search State into storage.
 * This is used for Quick Search etc. to have ResultsDisplay have something to display, as this is where it will be taken
 * @param currentSearchState - the SearchState to save in storage
 */
export async function saveSearchState(currentSearchState : SearchState) : Promise<boolean> {

  let valueToSave : string = JSON.stringify(currentSearchState);

  const returnValue = await Storage.set({
    key: singleStorageKey,
    value: valueToSave
  }).then( () => {
    return true;
  }).catch(err => {
    console.log(err);
    return false;
  });

  return returnValue;
}

/**
 * Retrieves a Search State in storage.
 * This is used for ResultsDisplay to retrieve the previously saved data.
 */
export async function getSearchState() : Promise<SearchState> {

  const storageReturn = await Storage.get({key: singleStorageKey});

  if (typeof storageReturn.value === 'string') {
    return (JSON.parse(storageReturn.value) as SearchState);
  } else { //Null Case
    return emptySearch;
  }
}

////////////////////////
/*Capacitor Storage for Multiple Storage*/
////////////////////////

/**
 * Saves an array of Search State into storage.
 * This is used for Advanced Search to save what needs to be displayed in SearchResults.
 * @param searchRequest - the Array of SearchStates to be saved in storage.
 */
export async function saveSearchRequest(searchRequest : SearchState[]) : Promise<boolean> {

  let valueToSave : string = JSON.stringify(searchRequest);

  const returnValue = await Storage.set({
    key: multipleStorageKey,
    value: valueToSave
  }).then( () => {
    return true;
  }).catch(err => {
    console.log(err);
    return false;
  });

  return returnValue;
}

/**
 * Retrieves the SearchState Array in storage.
 * This is used for SearchResults to retrieve the previously saved data.
 */
export async function getSearchRequest() : Promise<SearchState[]> {

  const storageReturn = await Storage.get({key: multipleStorageKey});

  if (typeof storageReturn.value === 'string') {
    return (JSON.parse(storageReturn.value) as SearchState[]);
  } else { //Null Case
    return [];
  }
}