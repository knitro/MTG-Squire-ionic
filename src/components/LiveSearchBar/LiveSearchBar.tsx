import React, { Component, useState } from 'react';
import {  IonContent, IonSearchbar, IonButton, IonRouterOutlet, IonLoading, IonAlert } from "@ionic/react";
import './LiveSearchBar.css';
import { useHistory, Route } from 'react-router-dom';
import { emptySearch, SearchState, SearchStateContextProvider, SearchStateContextConsumer } from '../../states/SearchState';
import App from '../../App';

export enum LiveSearchCategory {
  Cards,
  Rules,
  SetEV,
  Settings
}

interface SearchBarProps {
  searchString: string;
  placeholderText: string;
  category : LiveSearchCategory;
}

// class LiveSearchBar extends Component<SearchBarProps> {
const LiveSearchBar = (props : SearchBarProps) => {

  /*Variable Initialisation*/
  //Parameter Variables
  let searchString : string = props.searchString;
  let placeholderText : string = props.placeholderText;
  let category : LiveSearchCategory = props.category;

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
        } animated
      />

      <IonButton 
        color="primary"
        expand="block"
        fill="outline"
        shape="round"
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
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={2000}
      />

      <IonAlert
        isOpen={showAlert1}
        onDidDismiss={() => setShowAlert1(false)}
        cssClass='my-custom-class'
        header={'Alert'}
        subHeader={'Subtitle'}
        message={'This is an alert message.'}
        buttons={['OK']}
      />
        
        {/* <IonButton 
          color="primary"
          expand="block"
          fill="outline"
          shape="round"
          size="large"
          text-align="center"
          class="searchButton"
          href="/results-display"
          onClick={e => {
            console.log("Button Pressed: Search Database");
          }}
        >
            {"Go to Result"}
        </IonButton> */}

        {/* <SearchStateContextConsumer>
        {(context : SearchState) => (
          <IonButton onClick={e =>
          {
            console.log(context.cardName);
            console.log(context.fullType);
            console.log(context.imageLink);
            console.log(context.manaCost);
            console.log(context.oracleText);
          }
          }>Check DB Status</IonButton>
        )}
      </SearchStateContextConsumer> */}

    </IonContent>
  );
}

export default LiveSearchBar;