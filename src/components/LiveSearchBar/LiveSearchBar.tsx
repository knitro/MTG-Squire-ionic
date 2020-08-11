import React, { Component, useState } from 'react';
import {  IonContent, IonSearchbar, IonButton, IonRouterOutlet } from "@ionic/react";
import './LiveSearchBar.css';
import { useHistory, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import ResultDisplay, { } from '../../pages/ResultDisplay/ResultDisplay';
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

class LiveSearchBar extends Component<SearchBarProps> {
  
  /*Fields*/
  //Constructor Fields
  searchString : string = ""; //Default
  placeholderText : string = "Search"; //Default
  category : LiveSearchCategory = LiveSearchCategory.Cards; //Default
  
  //Search Field
  currentSearch: SearchState = emptySearch;

  /*Constructor*/
  constructor(props : SearchBarProps) {
    super(props);
    this.searchString = props.searchString;
    this.placeholderText = props.placeholderText;
    this.category = props.category;
  }

  /*Methods*/

  /*Render*/
  render() {

    /*React Hook Initialisation*/
    // const {searchProps, updateSearchProps} = useState(ResultDisplay.defaultProps as ResultsDisplayProps);

    /*Other Variable Initialisation*/
    //None

    /*Rendering*/
    return (
      <IonContent>

        {/* <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/result-display" component={ResultDisplay} />
          </IonRouterOutlet>
        </IonReactRouter> */}

        <IonSearchbar 
            autocomplete="on" 
            inputmode="text" 
            type="text" 
            placeholder={this.placeholderText}
            value={this.searchString} 
            onIonChange={
              e => {
                this.searchString = e.detail.value!;
                this.currentSearch.cardName = this.searchString;
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
              this.currentSearch.cardName = this.searchString;
              App.databases[0].database.performSearch(this.currentSearch);
            }}
          >
              {"Search"}
          </IonButton>

          <IonButton 
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
          </IonButton>

          <SearchStateContextConsumer>
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
        </SearchStateContextConsumer>

      </IonContent>
    );
  }
};

export default LiveSearchBar;