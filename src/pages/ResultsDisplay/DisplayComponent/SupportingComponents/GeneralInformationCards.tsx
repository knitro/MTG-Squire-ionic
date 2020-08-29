import React from 'react';
import { IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol } from '@ionic/react';
import '../ResultsDisplay.css';
import uuid from 'uuid';
import { SearchState } from '../../../../states/SearchState';
import ManaCost from '../../../../components/ManaCost/ManaCost';

interface  GeneralInformationCardsProps {
  search : SearchState
  additionalRulings : string[]
}

/**
 * Displays the OtherPrintings IonCard.
 * @param props - the information for the OtherPrintingsCard to display
 */
const GeneralInformationCards = (props : GeneralInformationCardsProps) => {

  /*Variable Initialisation*/
  const currentSearchState = props.search;
  const additionalRulings = props.additionalRulings;

  /*Return Display*/
  return (
    <IonList>
            
    {/* IonCard 1: Name + Image */}
    <IonCard color="secondary">
      <IonCardHeader>
        <IonRow>
          <IonCol>
            <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
          </IonCol>
          <IonCol>
            <ManaCost cost={currentSearchState.manaCost}/>
          </IonCol>
        </IonRow>
        <IonCardSubtitle>{currentSearchState.fullType}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <img src={currentSearchState.imageLink} alt={currentSearchState.imageLink}/>
      </IonCardContent>
    </IonCard>
    
    {/* IonCard 2:  Oracle Text*/}
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{"Oracle Text"}</IonCardTitle>
      </IonCardHeader>
      <div>
        {currentSearchState.oracleText.split("\n").map((currentItem: string) => 
          <IonCardContent key={uuid.v4()}>
            {currentItem}
          </IonCardContent>
        )}
      </div>
    </IonCard>

    {/* IonCard 3:  Additional Rulings*/}
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{"Additional Rulings"}</IonCardTitle>
      </IonCardHeader>
      <div>
          {additionalRulings.map((currentItem: string) => 
            <IonCardContent key={uuid.v4()}>
              {currentItem}
            </IonCardContent>
          )}
      </div>
    </IonCard>

  </IonList>
  );
}

export default  GeneralInformationCards;