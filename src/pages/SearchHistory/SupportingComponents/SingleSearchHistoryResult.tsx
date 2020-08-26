import React, { useState } from 'react';
import { IonLoading, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert } from '@ionic/react';
import uuid from 'uuid';
import App from '../../../App';
import { useHistory } from 'react-router';
import { SearchHistoryState } from '../../../states/SearchHistoryState';
import { SearchState, emptySearch } from '../../../states/SearchState';
import { AdvancedSearchTerms, advancedSearchTermsToString } from '../../../dataManagers/DataMangerInterfaces';

interface SingleSearchHistoryResultProps {
  currentSearchHistoryState : SearchHistoryState
}

const SingleSearchHistoryResult = (props : SingleSearchHistoryResultProps) => {

  /*Variable Initialisation*/
  let search : SearchHistoryState = props.currentSearchHistoryState;
  const history = useHistory();
  let displayString = "";
  if ("Quick Search".localeCompare(search.typeOfSearch) === 0) {
    displayString = search.searchTerm;
  } else if ("Advanced Search".localeCompare(search.typeOfSearch) === 0) {
    let searchTerms = JSON.parse(search.searchTerm) as AdvancedSearchTerms;
    displayString = advancedSearchTermsToString(searchTerms);
  } else {
    displayString = "ERROR";
  }

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
        message={'Getting Previous Search Information'}
        duration={10000}
      />
      
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass='failed'
        header={'Error'}
        subHeader={'Failed to Get Previous Search Information'}
        message={'Please check your internet connection and re-perform the action.'}
        buttons={['OK']}
      />

      {/*IonCard Initialisation*/}
      <IonCard button={true} key={uuid.v4() } class="singleSearchHistoryResultCard"
        onClick={e => {
          setShowLoading(true)

          if ("Quick Search".localeCompare(search.typeOfSearch) === 0) {

          //Create Blank Search, and add the api url
          let searchToPerform : SearchState = emptySearch;
          searchToPerform.api_uri = search.url;

          App.dataManager.performSearch(searchToPerform).then(async (didPerform) => {
              if (didPerform) {
                setShowLoading(false);
                history.push("/results-display");
              } else {
                setShowLoading(false);
                setShowAlert(true);
              }    
            });

          } else if ("Advanced Search".localeCompare(search.typeOfSearch) === 0) {

            let searchTerms = JSON.parse(search.searchTerm) as AdvancedSearchTerms;

            App.dataManager.performAllSearch(searchTerms).then(async (didPerform) => {
              if (didPerform) {
                setShowLoading(false);
                history.push("/search-results");
              } else {
                setShowLoading(false);
                setShowAlert(true);
              }    
            });
          } else {
            console.log("This should not happen");
            setShowLoading(false);
            setShowAlert(true);
          }
          
        }}
      >
        <IonCardHeader>
          <IonCardSubtitle> {search.typeOfSearch}</IonCardSubtitle>
          <IonCardTitle>{displayString}</IonCardTitle>
        </IonCardHeader>
      </IonCard>

    
    </div>
  );
}

export default SingleSearchHistoryResult;

