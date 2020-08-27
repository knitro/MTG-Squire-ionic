import axios from 'axios';
import { saveCurrency, getCurrencyStorage } from './states/CurrencyState';
import { getSettings, Settings } from './states/SettingsState';


export interface CurrencyInformation {
    rates: Currencies;
    base:  string;
    date:  string;
}

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

/**
 * Gets a currency value from the function
 * While it could use a shortened form using 
 * it allows for possible customisation of inputs
 * @param type want string of currency type
 * @param currencies storage class of currency
 */
function getCurrencyValue(type : string, currencies : CurrencyInformation){
  if ("CAD".localeCompare(type))
    return currencies.rates.CAD;
  else if ("HKD".localeCompare(type))
    return currencies.rates.HKD;
  else if ("ISK".localeCompare(type))
    return currencies.rates.ISK;
  else if ("PHP".localeCompare(type))
    return currencies.rates.PHP;
  else if ("DKK".localeCompare(type))
    return currencies.rates.DKK;
  else if ("HUF".localeCompare(type))
    return currencies.rates.HUF;
  else if ("CZK".localeCompare(type))
    return currencies.rates.CZK;
  else if ("GBP".localeCompare(type))
    return currencies.rates.GBP;
  else if ("RON".localeCompare(type))
    return currencies.rates.RON;
  else if ("SEK".localeCompare(type))
    return currencies.rates.SEK;
  else if ("IDR".localeCompare(type))
    return currencies.rates.IDR;
  else if ("INR".localeCompare(type))
    return currencies.rates.INR;
  else if ("BRL".localeCompare(type))
    return currencies.rates.BRL;
  else if ("RUB".localeCompare(type))
    return currencies.rates.RUB;
  else if ("HRK".localeCompare(type))
    return currencies.rates.HRK;
  else if ("JPY".localeCompare(type))
    return currencies.rates.JPY;
  else if ("THB".localeCompare(type))
    return currencies.rates.THB;
  else if ("CHF".localeCompare(type))
    return currencies.rates.CHF;
  else if ("EUR".localeCompare(type))
    return currencies.rates.EUR;
  else if ("MYR".localeCompare(type))
    return currencies.rates.MYR;
  else if ("BGN".localeCompare(type))
    return currencies.rates.BGN;
  else if ("TRY".localeCompare(type))
    return currencies.rates.TRY;
  else if ("CNY".localeCompare(type))
    return currencies.rates.CNY;
  else if ("NOK".localeCompare(type))
    return currencies.rates.NOK;
  else if ("NZD".localeCompare(type))
    return currencies.rates.NZD;
  else if ("ZAR".localeCompare(type))
    return currencies.rates.ZAR;
  else if ("MXN".localeCompare(type))
    return currencies.rates.MXN;
  else if ("SGD".localeCompare(type))
    return currencies.rates.SGD;
  else if ("AUD".localeCompare(type))
    return currencies.rates.AUD;
  else if ("ILS".localeCompare(type))
    return currencies.rates.ILS;
  else if ("KRW".localeCompare(type))
    return currencies.rates.KRW;
  else if ("PLN".localeCompare(type))
    return currencies.rates.PLN;
  else if ("USD".localeCompare(type))
    return currencies.rates.USD;
  else
    return 0;
}

function getCurrentDate() : string {
  let date = new Date();
  let dateString = "" + date.getUTCFullYear() + "-" + (date.getUTCMonth()+1) + "-" + date.getUTCDate();
  console.log(dateString);
  return dateString;
}

export async function getCurrency() : Promise<number> {

  let date : string = getCurrentDate();
  let currency : CurrencyInformation = await getCurrencyStorage();
  if ( "".localeCompare(currency.base)) {
    await getCurrencyAPI(); //if fails will continue to use previous stored values
    currency = await getCurrencyStorage();
  } else if ( !(date.localeCompare(currency.date) === 0) ) {
    await getCurrencyAPI(); //if fails will continue to use previous stored values
    currency = await getCurrencyStorage();
  }
  
  //get value
  let settings : Settings = await getSettings();
  let currencySetting : string = settings.currency;  
  //return number value
  return getCurrencyValue(currencySetting,currency);
}


export async function getCurrencyAPI() : Promise<boolean>{
  // https://exchangeratesapi.io/
  // GET https://api.exchangeratesapi.io/latest?base=USD HTTP/1.1

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

    //TODO use value
    saveCurrency(axiosResult);
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
}