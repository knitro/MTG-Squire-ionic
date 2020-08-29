import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonList } from '@ionic/react';
import uuid from 'uuid';
import ResultsDisplay from '../../DisplayStateManager/ResultsDisplay';
import OtherPrinting from './SingleOtherPrinting';
import { SearchState } from '../../../../states/SearchState';
import '../ResultsDisplay.css';

interface OtherPrintingsCardsProps {
  search : SearchState
  main : ResultsDisplay
  swiper: any
}

/**
 * Displays the OtherPrintings IonCard.
 * @param props - the information for the OtherPrintingsCard to display
 */
const OtherPrintingsCards = (props : OtherPrintingsCardsProps) => {

  /*Variable Initialisation*/
  const currentSearchState = props.search;
  const main = props.main;
  const swiper = props.swiper;

  /*Return Display*/
  return (
    <IonList>

      {/* IonCard 1:  All Printings Header*/}
      <IonCard color="secondary">
        <IonCardHeader>
          <IonCardSubtitle>{"All Printings for:"}</IonCardSubtitle>
          <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
        </IonCardHeader>
      </IonCard>

      {/* IonCards 2+:  All the Printings as Individual Cards*/}
      <div>
        {currentSearchState.otherPrints.map((renderSearchState : SearchState) =>
          <OtherPrinting key={uuid.v4()} currentSearchState={renderSearchState} display={main} swiper={swiper}/>
        )}
      </div>

    </IonList>
  );
}

export default OtherPrintingsCards;