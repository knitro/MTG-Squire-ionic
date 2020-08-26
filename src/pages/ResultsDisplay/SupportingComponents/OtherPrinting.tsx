import React, { useState } from 'react';
import { IonLoading, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText, IonAlert } from '@ionic/react';
import uuid from 'uuid';
import { SearchState, getSearchState, emptySearch } from '../../../states/SearchState';
import ResultsDisplay from '../ResultsDisplay';
import App from '../../../App';

interface OtherPrintingProps {
  currentSearchState : SearchState
  display : ResultsDisplay
  swiper : any
}

const OtherPrinting = (props : OtherPrintingProps) => {

  /*Variable Initialisation*/
  let search : SearchState = props.currentSearchState;
  let display : ResultsDisplay = props.display;

  /*Hook Initialisation*/
  const [showLoading, setShowLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  /*Return*/
  return (
    
    <div>
      {/*IonLoading Initialisation*/}
      <IonLoading
        cssClass=''
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Switching Card Versions'}
        duration={10000}
      />
      
      <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='failed'
          header={'Error'}
          subHeader={'Failed to Get Card Information'}
          message={'Please check your internet connection and re-perform the search.'}
          buttons={['Dismiss']}
      />

      {/*IonCard Initialisation*/}
      <IonCard button={true} key={uuid.v4()}
        onClick={e => {
          setShowLoading(true)
          
          //Create Blank Search, and add the api url
          let searchToPerform : SearchState = emptySearch;
          searchToPerform.api_uri = search.api_uri;

          App.dataManager.performSearch(searchToPerform).then(async (didPerform) => {
            if (didPerform) {
              setShowLoading(false);
              display.setState({currentSearchState: await getSearchState()});
              props.swiper.slideTo(1);
            } else {
              setShowLoading(false);
              setShowAlert(true);
            }    
          });
        }}
      >
        <IonCardHeader>
          <IonCardSubtitle>{search.set.setCode.toUpperCase()}</IonCardSubtitle>
          <IonCardTitle>{search.set.setName}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {/* <IonImg src={renderSearchState.imageLink} class="cardImage" data-src={renderSearchState.imageLink}/> */}
          <img src={search.imageLink} alt={search.imageLink}/>
          <IonText>{"Release Date: "}{search.misc.released}</IonText>
        </IonCardContent>
      </IonCard>

    
    </div>
  );
}

export default OtherPrinting;

