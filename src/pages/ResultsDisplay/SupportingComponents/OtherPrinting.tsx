import React, { useState } from 'react';
import { IonLoading, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText } from '@ionic/react';
import uuid from 'uuid';
import { SearchState, getSearchState } from '../../../states/SearchState';
import ResultsDisplay from '../ResultsDisplay';
import App from '../../../App';

interface OtherPrintingProps {
  currentSearchState : SearchState
  display : ResultsDisplay
  currentDisplay: number
  swiper : any
}

const OtherPrinting = (props : OtherPrintingProps) => {

  /*Variable Initialisation*/
  let search : SearchState = props.currentSearchState;
  let display : ResultsDisplay = props.display;

  /*Hook Initialisation*/
  const [showLoading, setShowLoading] = useState(false);

  /*Return*/
  return (
    
    <>
      {/*IonLoading Initialisation*/}
      <IonLoading
        cssClass=''
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={10000}
      />
      
      {/*IonCard Initialisation*/}
      <IonCard button={true} key={uuid.v4()}
        onClick={e => {
          setShowLoading(true)
          App.databases[0].database.performSearchURL(search.api_uri, true).then(async (didPerform) => {
            if (didPerform) {
              setShowLoading(false);
              console.log("Finished: Card Searching");
              display.setState({currentSearchState: await getSearchState()});
              props.swiper.slideTo(1);
            } else {
              setShowLoading(false);
              // setShowAlert1(true);
              console.log("Finished but Failed: Card Searching");
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

    
    </>
  );
}

export default OtherPrinting;

