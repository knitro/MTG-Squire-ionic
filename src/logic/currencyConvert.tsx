////////////////////////
/*Imports*/
////////////////////////

import { CurrencyInformation } from '../states/CurrencyState';

////////////////////////
/*Functions*/
////////////////////////

/**
 * Gets a currency value from the function
 * While it could use a shortened form using 
 * it allows for possible customisation of inputs
 * @param type want string of currency type
 * @param currencies storage class of currency
 */
export function getCurrencyValue(type : string, currencies : CurrencyInformation) {
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

