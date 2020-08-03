import React, { Component } from 'react';
import {  IonContent, IonSearchbar } from "@ionic/react";
import './LiveSearchBar.css';

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
  searchString : string = ""; //Default
  placeholderText : string = "Search"; //Default
  category : LiveSearchCategory = LiveSearchCategory.Cards; //Default

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
    return (
      <IonContent>

        <IonSearchbar 
            autocomplete="on" 
            inputmode="text" 
            type="text" 
            placeholder={this.placeholderText}
            value={this.searchString} 
            onIonChange={e => this.searchString = e.detail.value! } animated
        />

      </IonContent>
    );
  }
};

export default LiveSearchBar;