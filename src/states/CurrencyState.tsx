////////////////////////
/*Imports*/
////////////////////////

import { Plugins } from '@capacitor/core';
import { CurrencyInformation, emptyCurrencyInformation } from '../currencyConvert';

////////////////////////
/*Local Initialisation*/
////////////////////////

const { Storage } = Plugins;

const storageKey : string = "currency";   // String that dictates the storage identifier in the capacitor.

////////////////////////
/*Capacitor Storage for History Storage*/
////////////////////////

/**
 * Saves a CurrencyInformation into storage.
 * @param current the value being put into storage
 */
export async function saveCurrency(current : CurrencyInformation) : Promise<boolean> {

  /*JSONStringify the Currency values*/
  let valueToSave : string = JSON.stringify(current);

  /*Save the Currency into Capacitor Storage*/
  const returnValue = await Storage.set({
    key: storageKey,
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
 * Retrieves the CurrencyInformation from storage.
 */
export async function getCurrencyStorage() : Promise<CurrencyInformation> {

  const storageReturn = await Storage.get({key: storageKey});

  if (typeof storageReturn.value === 'string') {
    console.log((JSON.parse(storageReturn.value) as CurrencyInformation));
    return (JSON.parse(storageReturn.value) as CurrencyInformation);
  } else { //Null Case
    return emptyCurrencyInformation;
  }
}