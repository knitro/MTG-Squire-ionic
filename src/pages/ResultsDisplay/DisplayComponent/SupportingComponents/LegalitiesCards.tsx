import React from 'react';
import { IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText } from '@ionic/react';
import { SearchState } from '../../../../states/SearchState';
import { Legality } from '../../DisplayStateManager/ResultsDisplay';
import uuid from 'uuid';
import '../ResultsDisplay.css';

interface LegalityCardsProps {
  search : SearchState
  legalities : Legality[]
}

/**
 * Displays the OtherPrintings IonCard.
 * @param props - the information for the OtherPrintingsCard to display
 */
const LegalityCards = (props : LegalityCardsProps) => {

  /*Variable Initialisation*/
  const currentSearchState = props.search;
  const legalitiesFormatted = props.legalities;

  /*Return Display*/
  return (
    <IonList>
              
      {/*IonCard 0: Image Card*/}
      <IonCard>
        <img src={currentSearchState.imageOnlyLink} alt={currentSearchState.imageOnlyLink}/>
      </IonCard>

      {/* IonCards 1: Legality Header*/}
      <IonCard color="secondary">
          <IonCardHeader>
            <IonCardSubtitle>{"Format Legality for:"}</IonCardSubtitle>
            <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
          </IonCardHeader>
        </IonCard>

      {/* IonCard 2: Legalities */}
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{"Legalities"}</IonCardTitle>
        </IonCardHeader>
        <div>
            {legalitiesFormatted.map((currentItem: Legality) => 
              <IonCardContent key={uuid.v4()}>
                <IonText class="category-label">{currentItem.label}</IonText>
                <IonText class="category-value" color={currentItem.colour}>{currentItem.legality}</IonText>
              </IonCardContent>
            )}
        </div>
      </IonCard>
    </IonList>
  );
}

export default LegalityCards;