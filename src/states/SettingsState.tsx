////////////////////////
/*Imports*/
////////////////////////

import { Plugins } from '@capacitor/core';

////////////////////////
/*Local Initialisation*/
////////////////////////

const { Storage } = Plugins;

const storageKey : string = "settings";

export const defaultSettings : Settings =
  {
    maxSearch : 1,
    searchStored : 20,
    diceStored : 20,
  };
////////////////////////
/*Settings*/
////////////////////////

/**
 * Settings Interface
 * Used to store state of settings
 */
export interface Settings{
  maxSearch : number;
  searchStored : number;
  diceStored : number;
}



////////////////////////
/*Capacitor Storage for Settings*/
////////////////////////

/**
 * Saves settings value to storage.
 * @param s current settings to save
 */
export async function saveSettings(s : Settings) : Promise<boolean> {
  /*Save the Settings into Capacitor Storage*/
  const returnValue = await Storage.set({
    key: storageKey,
    value: JSON.stringify(s)
  }).then( () => {
    return true;
  }).catch(err => {
    console.log(err);
    return false;
  });

  return returnValue;
}

/**
 * Gets Settings from storage
 * Retrieve previously saved data.
 */
export async function getSettings() : Promise<Settings> {

  const storageReturn = await Storage.get({key: storageKey});

  if (typeof storageReturn.value === 'string') {
    return (JSON.parse(storageReturn.value) as Settings);
  } else { //Null Case
    return defaultSettings;
  }
}
