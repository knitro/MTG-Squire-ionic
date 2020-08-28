import React from 'react';
import { MiscInformation } from "../../../states/SearchState";
import { IonCardContent, IonText } from "@ionic/react";
import { CurrencyInformation } from '../../../states/CurrencyState';
import { getConvertedValue } from '../../../logic/currencyConvert';

/**
 * Creates an "HTML" or React Component containing the card's price.
 * @param source - the Label of the source of the price
 * @param currencyFrom 
 * @param currencyTo 
 * @param currencyMapping 
 * @param price - the price of the card
 * @param isFoil - boolean whether the card's price is for a foil card 
 * @param isOnline - boolean whether the card's price is for an online card 
 * @param miscInfo - the MiscInformation of the unique card.
 */
export function getPrice(source : string, currencyFrom : string, currencyTo : string, currencyMapping : CurrencyInformation, 
    price : string, isFoil : boolean, isOnline : boolean, miscInfo: MiscInformation) {

  /*Check if the Card actually exists or not*/
  if ( (isFoil && (miscInfo.foil === true)) || (!isFoil && (miscInfo.nonfoil === true)) ) {
    if ((isOnline && (miscInfo.digital_only === true)) || (!isOnline && (miscInfo.digital_only === false))) {

      //At this point, the card exists.
      //Check if the Price Exists:
      if ("".localeCompare(price) !== 0) {

        //Convert the Price:
        const sourcePrice : number = Number(price);
        const convertedPrice : number = getConvertedValue(sourcePrice, currencyFrom, currencyTo, currencyMapping);

        //Check for Valid Converted Price 
        if (convertedPrice !== -1) {
          return (
            <IonCardContent>
              <IonText class="category-label">{source + " " + ((isFoil) ? ("Foil") : ("Non Foil")) + ": "}</IonText>
              <IonText class="category-value">{price}{" " + currencyTo}</IonText>
            </IonCardContent>
          )
        }
      }

      //Returns with Price not Available if price does not exist, or price conversion failed
      return (
        <IonCardContent>
          {source + ": Price Not Available"}
        </IonCardContent>
      );

    }
  }
  
  /*Fail Return, display nothing*/
  return (
    <div></div>
  );
}