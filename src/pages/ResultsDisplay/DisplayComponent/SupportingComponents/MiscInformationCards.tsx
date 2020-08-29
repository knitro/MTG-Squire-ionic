import React from 'react';
import { IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText } from '@ionic/react';
import { SearchState } from '../../../../states/SearchState';
import { capitaliseFirstLetter, convertBooleanToString } from '../../../../logic/stringHelper';
import '../ResultsDisplay.css';

interface MiscInformationCardsProps {
  search : SearchState
}

/**
 * Displays the OtherPrintings IonCard.
 * @param props - the information for the OtherPrintingsCard to display
 */
const MiscInformationCards = (props : MiscInformationCardsProps) => {

  /*Variable Initialisation*/
  const currentSearchState = props.search;
  const miscInformation = currentSearchState.misc;

  /*Return Display*/
  return (
    <IonList>
              
      {/*IonCard 0: Image Card*/}
      <IonCard>
        <img src={currentSearchState.imageOnlyLink} alt={currentSearchState.imageOnlyLink}/>
      </IonCard>

      {/* IonCards 1: Misc Information Header*/}
      <IonCard color="secondary">
          <IonCardHeader>
            <IonCardSubtitle>{"Miscellaneous Information for:"}</IonCardSubtitle>
            <IonCardTitle>{currentSearchState.cardName}</IonCardTitle>
          </IonCardHeader>
        </IonCard>

      {/* IonCard 2:  Misc Information*/}
      <IonCard class="fullScreenCard">

        <IonCardHeader>
          <IonCardTitle>{"Miscellaneous Information"}</IonCardTitle>
        </IonCardHeader>
        
        <IonCardContent>  
          <IonText class="category-label">{"Released Date: "}</IonText>
          <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.released)}</IonText>
        </IonCardContent>
        
        <IonCardContent>  
          <IonText class="category-label">{"Artist: "}</IonText>
          <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.artist)}</IonText>
        </IonCardContent>
        
        <IonCardContent>  
          <IonText class="category-label">{"Rarity: "}</IonText>
          <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.rarity)}</IonText>
        </IonCardContent>

        <IonCardContent>  
          <IonText class="category-label">{"Collector Number: "}</IonText>
          <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.collector_number)}</IonText>
        </IonCardContent>

        <IonCardContent>  
          <IonText class="category-label">{"Exists Non-Foil Version: "}</IonText>
          <IonText class="category-value" color="dark">{convertBooleanToString(miscInformation.nonfoil)}</IonText>
        </IonCardContent>

        <IonCardContent>  
          <IonText class="category-label">{"Exists Foil Version: "}</IonText>
          <IonText class="category-value" color="dark">{convertBooleanToString(miscInformation.foil)}</IonText>
        </IonCardContent>

        <IonCardContent>  
          <IonText class="category-label">{"Is a Promo Variant: "}</IonText>
          <IonText class="category-value" color="dark">{convertBooleanToString(miscInformation.promo)}</IonText>
        </IonCardContent>

        <IonCardContent>  
          <IonText class="category-label">{"Is it a Reprint?: "} </IonText>
          <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.rarity)}</IonText>
        </IonCardContent>

        <IonCardContent>  
          <IonText class="category-label">{"Frame Version: "}</IonText>
          <IonText class="category-value" color="dark">{capitaliseFirstLetter(miscInformation.frame)}</IonText>
        </IonCardContent>

        <IonCardContent>  
          <IonText class="category-label">{"On the Reserve List?: "} </IonText>
          <IonText class="category-value" color="dark">{convertBooleanToString(miscInformation.reserved)}</IonText>
        </IonCardContent>

      </IonCard>
    </IonList>
  );
}

export default MiscInformationCards;