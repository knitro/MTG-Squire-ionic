import React from 'react';
import './LiveSearchBar.css';
import LiveSearchBarCards from './LiveSearchBarCards/LiveSearchBarCards';

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

const LiveSearchBar = (props : SearchBarProps) => {

  /*Variable Initialisation*/
  let category : LiveSearchCategory = props.category;

  /*Rendering*/
  if (category === LiveSearchCategory.Cards) {
    return (
      <LiveSearchBarCards searchString="" placeholderText="Search for Magic Cards" />
    );
  } else if (category === LiveSearchCategory.Rules) {
    return (
      <></>
    );
  } else if (category === LiveSearchCategory.SetEV) {
    return (
      <></>
    );
  } else if (category === LiveSearchCategory.Settings) {
    return (
      <></>
    );
  } else {
    console.log("ERROR: This is not an implemented SearchBar category");
    return (
      <></>
    );
  }
  
}

export default LiveSearchBar;