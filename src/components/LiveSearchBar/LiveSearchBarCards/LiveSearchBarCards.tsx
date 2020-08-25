import React, { useState } from 'react';
import {  IonContent, IonSearchbar, IonButton, IonLoading, IonAlert } from "@ionic/react";
import '../LiveSearchBar.css';
import { useHistory } from 'react-router-dom';
import { emptySearch, SearchState } from '../../../states/SearchState';
import App from '../../../App';

interface SearchBarProps_Cards {
  searchString: string;
  placeholderText: string;
}

const LiveSearchBarCards = (props : SearchBarProps_Cards) => {

  /*Variable Initialisation*/
  //Parameter Variables
  let searchString : string = props.searchString;
  let placeholderText : string = props.placeholderText;

  //Other Initialisations
  const history = useHistory();
  let currentSearch: SearchState = emptySearch;
  const [showAlert1, setShowAlert1] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  /*Rendering*/
  return (
    <IonContent>

      <IonSearchbar 
        autocomplete="on" 
        inputmode="text" 
        type="search" 
        placeholder={placeholderText}
        value={searchString} 
        onIonChange={
          e => {
            searchString = e.detail.value!;
            currentSearch.cardName = searchString;
          } 
        }
        animated={true}
      />
      
      <IonButton 
        color="primary"
        expand="block"
        fill="solid"
        // shape="round"
        size="large"
        text-align="center"
        class="searchButton"
        onClick={e => {
          console.log("Button Pressed: Search Database");
          currentSearch.cardName = searchString;
          console.log("Started: Card Searching");
          setShowLoading(true)
          App.databases[0].database.performSearch(currentSearch).then((didPerform) => {
            if (didPerform) {
              setShowLoading(false)
              history.push("/results-display");
              console.log("Finished: Card Searching");
            } else {
              setShowLoading(false)
              setShowAlert1(true);
              console.log("Finished but Failed: Card Searching");
            }
            
          });
        }}
      >
        {"Search"}
      </IonButton>
      
      <IonLoading
        cssClass='ionLoading'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={10000}
      />

      <IonAlert
        isOpen={showAlert1}
        onDidDismiss={() => setShowAlert1(false)}
        cssClass='failed'
        header={'ERROR'}
        subHeader={'Subtitle'}
        message={'This is an alert message.'}
        buttons={['OK']}
      />

    </IonContent>
  );
}

export default LiveSearchBarCards;