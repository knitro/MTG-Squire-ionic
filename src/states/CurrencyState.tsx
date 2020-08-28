////////////////////////
/*Imports*/
////////////////////////

import { Plugins } from '@capacitor/core';
import axios from 'axios';


////////////////////////
/*Local Initialisation*/
////////////////////////

const { Storage } = Plugins;

const storageKey : string = "currency";   // String that dictates the storage identifier in the capacitor.


/**
 * Default value for currency information
 * Gives empty values
 */
export const emptyCurrencyInformation : CurrencyInformation = {
  base: "",
  date: "",
  rates: 
    {
      CAD: 0, HKD: 0, ISK: 0, PHP: 0, DKK: 0, HUF: 0,
      CZK: 0, GBP: 0, RON: 0, SEK: 0, IDR: 0, INR: 0,
      BRL: 0, RUB: 0, HRK: 0, JPY: 0, THB: 0, CHF: 0,
      EUR: 0, MYR: 0, BGN: 0, TRY: 0, CNY: 0, NOK: 0,
      NZD: 0, ZAR: 0, USD: 0, MXN: 0, SGD: 0, AUD: 0,
      ILS: 0, KRW: 0, PLN: 0
    }
};

////////////////////////
/*Interfaces*/
////////////////////////

/**
 * Interface for currency information 
 * Also used to store from api
 */
export interface CurrencyInformation {
    rates: Currencies;
    base:  string;
    date:  string;
} 

/**
 * Sub interface for CurrencyInformation rates section
 */
interface Currencies {
    CAD: number;
    HKD: number;
    ISK: number;
    PHP: number;
    DKK: number;
    HUF: number;
    CZK: number;
    GBP: number;
    RON: number;
    SEK: number;
    IDR: number;
    INR: number;
    BRL: number;
    RUB: number;
    HRK: number;
    JPY: number;
    THB: number;
    CHF: number;
    EUR: number;
    MYR: number;
    BGN: number;
    TRY: number;
    CNY: number;
    NOK: number;
    NZD: number;
    ZAR: number;
    USD: number;
    MXN: number;
    SGD: number;
    AUD: number;
    ILS: number;
    KRW: number;
    PLN: number;
}

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
 * Gets current currency mapping from USD to chosen currency
 * Will recall API if no local stored or stored is old
 */
export async function getCurrency(currencySetting : string) : Promise<CurrencyInformation> {

  let date : string = getCurrentDate();
  let currency : CurrencyInformation = await getCurrencyStorage();
  if ( "".localeCompare(currency.base)) {
    await getCurrencyAPI(); //if fails will continue to use previous stored values
    currency = await getCurrencyStorage();
  } else if ( !(date.localeCompare(currency.date) === 0) ) {
    await getCurrencyAPI(); //if fails will continue to use previous stored values
    currency = await getCurrencyStorage();
  }

  return currency;
}


/**
 * Retrieves the CurrencyInformation from storage.
 */
async function getCurrencyStorage() : Promise<CurrencyInformation> {

  const storageReturn = await Storage.get({key: storageKey});

  if (typeof storageReturn.value === 'string') {
    console.log((JSON.parse(storageReturn.value) as CurrencyInformation));
    return (JSON.parse(storageReturn.value) as CurrencyInformation);
  } else { //Null Case
    return emptyCurrencyInformation;
  }
}

/**
 * Gets current currency multiplier from USD to chosen currency
 * Will recall API if no local stored or stored is old
 * API: https://exchangeratesapi.io/
 * @return returns boolean of API call success
 */
async function getCurrencyAPI() : Promise<boolean> {
  const url : string = "https://api.exchangeratesapi.io/latest?base=USD"; 
  try {
    const axiosResult : CurrencyInformation = await axios({
      url: url,
      method: 'GET',
    }).then((response) => {
      let output : CurrencyInformation = response.data;
      output.date = getCurrentDate();
      return output;
      }
    ).catch(error => {
      console.log(error);
      return emptyCurrencyInformation;
    });

    saveCurrency(axiosResult);
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
}

/**
 * Gets current date as string
 */
function getCurrentDate() : string {
  let date = new Date();
  let dateString = "" + date.getUTCFullYear() + "-" + (date.getUTCMonth()+1) + "-" + date.getUTCDate();
  console.log(dateString);
  return dateString;
}
