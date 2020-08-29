import React, { useState } from 'react';
import { IonLoading, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText, IonAlert, IonImg } from '@ionic/react';
import uuid from 'uuid';
import { SearchState, emptySearch } from '../../../../states/SearchState';
import App from '../../../../App';
import { useHistory } from 'react-router';

interface SingleSearchResultProps {
  currentSearchState : SearchState
}

/**
 * Displays the information of a single search result of a card provided by props.
 * @param props - the information that represents a single card
 */
const SingleSearchResult = (props : SingleSearchResultProps) => {

  /*Variable Initialisation*/
  let search : SearchState = props.currentSearchState;
  const history = useHistory();

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
        message={'Getting Card Information'}
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
          let searchToPerform : SearchState = Object.assign([], emptySearch);
          searchToPerform.api_uri = search.api_uri;
          
          console.log(searchToPerform.api_uri);

          App.dataManager.performSearch(searchToPerform).then(async (didPerform) => {
            if (didPerform) {
              setShowLoading(false);
              history.push("/results-display");
            } else {
              setShowLoading(false);
              setShowAlert(true);
            }    
          });
        }}
      >
        <IonCardHeader>
          <IonCardSubtitle> {search.fullType}</IonCardSubtitle>
          <IonCardTitle>{search.cardName}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonImg src={search.imageLink} class="cardImage" data-src={search.imageLink}/>
          <IonText>{"Release Date: "}{search.misc.released}</IonText>
        </IonCardContent>
      </IonCard>

    
    </div>
  );
}

export default SingleSearchResult;

