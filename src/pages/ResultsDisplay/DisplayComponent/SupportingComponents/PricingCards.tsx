import React from 'react';
import { IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { SearchState } from '../../../../states/SearchState';
import { getPrice } from '../../Logic/ResultsDisplayLogic';
import StarCityGames from './StarCityGames';
import { CurrencyInformation } from '../../../../states/CurrencyState';
import '../ResultsDisplay.css';

interface  PricingCardsProps {
  search : SearchState
  currentCurrency : string
  currencyMapping : CurrencyInformation
}

/**
 * Displays the OtherPrintings IonCard.
 * @param props - the information for the OtherPrintingsCard to display
 */
const PricingCards = (props : PricingCardsProps) => {

  /*Variable Initialisation*/
  const currentSearchState = props.search;
  const currencyTo = props.currentCurrency;
  const currencyMapping = props.currencyMapping;

  /*Return Display*/
  return (
    <IonList>
                
      {/*IonCard 0: Image Card*/}
      <IonCard>
        <img src={currentSearchState.imageOnlyLink} alt={currentSearchState.imageOnlyLink}/>
      </IonCard>

      {/* IonCards 1: Prices and Purchase Link Header*/}
      <IonCard color="secondary">
        <IonCardHeader>
          <IonCardSubtitle>{"Prices for:"}</IonCardSubtitle>
          <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
        </IonCardHeader>
      </IonCard>

      {/* IonCards 2:  Pricing*/}
      <IonCard class="fullScreenCard">
        <IonCardHeader>
          <IonCardTitle>{"ScryFall Prices"}</IonCardTitle>
        </IonCardHeader>
        <div>
          {getPrice("Scryfall", "USD", currencyTo, currencyMapping, currentSearchState.prices.scryFallPricing_nonfoil, false, false, currentSearchState.misc)}
          {getPrice("Scryfall", "USD", currencyTo, currencyMapping, currentSearchState.prices.scryFallPricing_foil, true, false, currentSearchState.misc)}
        </div>
      </IonCard>
      
      {/* IonCards 3:  Prices and Purchase Link Header*/}
      <IonCard color="secondary">
        <IonCardHeader>
          <IonCardSubtitle>{"Purchase Links for:"}</IonCardSubtitle>
          <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
        </IonCardHeader>
      </IonCard>

      {/* IonCards 4:  Purchase Links*/}
      <StarCityGames search={currentSearchState}/>
    
    </IonList>
  );
}

export default PricingCards;