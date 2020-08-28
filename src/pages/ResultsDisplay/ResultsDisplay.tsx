import React from 'react';
import { IonCardContent, IonText } from '@ionic/react';
import './ResultsDisplay.css';
import { SearchState, getSearchState, emptySearch, MiscInformation } from '../../states/SearchState';
import ResultsDisplayComponent from './ResultsDisplayComponent';

////////////////////////
/*Interfaces*/
////////////////////////

export interface Legality {
  label: string //The Label to go with the Legality (The Format)
  legality: string //The Legality Status
  colour: string
};

export interface ResultsDisplayState {
  currentSearchState: SearchState //The Label to go with the Legality (The Format)
  legalitiesFormatted: Legality[] //The Legality Status
  additionalRulings: string[]
  currentCurrency : string
};

////////////////////////
/*Results Display Class*/
////////////////////////

class ResultsDisplay extends React.Component<{}, ResultsDisplayState> {

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props);
    this.state = {
      currentSearchState: emptySearch,
      legalitiesFormatted: [],
      additionalRulings: [],
      currentCurrency : "USD"
    }
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  /**
   * Updates the Components when async results.
   */
  async componentDidMount() {

    console.log("Component Mounting");
    this.setState({currentSearchState: await getSearchState()});
    this.formatLegalities();
    this.setRulings();
  }

  /**
   * Sets the Rulings of a Card to be displayed.
   */
  setRulings() {
    this.setState({additionalRulings: []});
    if (this.state.currentSearchState.rulings.length === 0) {
      this.state.additionalRulings.push("None");
    } else {
      this.state.currentSearchState.rulings.map((currentItem: string) => {
        this.state.additionalRulings.push(currentItem);
        return currentItem;
      });
    }
  }

  /**
   * Formats the Legalities into a single legality[], making it easier on the render method
   * to render the legalities of a card.
   */
  formatLegalities() {
    
    /*Reset Array*/
    this.setState({legalitiesFormatted: []}); 

    /*Variable Simplification*/
    let search : SearchState = this.state.currentSearchState;
    let array : Legality[] = this.state.legalitiesFormatted;

    /*Re-Add to the String[]*/
    //Standard
    array.push(this.formatLegality("Standard", search.legality.standard));
    //Pioneer
    array.push(this.formatLegality("Pioneer", search.legality.pioneer));
    //Modern
    array.push(this.formatLegality("Modern", search.legality.modern));
    //Legacy
    array.push(this.formatLegality("Legacy", search.legality.legacy));
    //Pauper
    array.push(this.formatLegality("Pauper", search.legality.pauper));
    //Commander
    array.push(this.formatLegality("Commander", search.legality.commander));
    //Vintage
    array.push(this.formatLegality("Vintage", search.legality.vintage));
    //Future
    array.push(this.formatLegality("Future", search.legality.future));
    //Historic
    array.push(this.formatLegality("Historic", search.legality.historic));
    //Brawl
    array.push(this.formatLegality("Brawl", search.legality.brawl));
    //Penny
    array.push(this.formatLegality("Penny", search.legality.penny));
    //Duel
    array.push(this.formatLegality("Duel", search.legality.duel));
    //Old School
    array.push(this.formatLegality("Old School", search.legality.oldschool));
  }

  /**
   * Formats a single legality from "Code English" to English.
   * @param format - the Format String to be printed at the start
   * @param legalityString - the Legality string from the legality interface
   */
  formatLegality(format: string, legalityString : string) : Legality {

    let formatCleaned : string = format + ": ";

    if ("legal".localeCompare(legalityString) === 0) {
      return {label: formatCleaned, legality: "Legal", colour: "success"};
    } else if ("not_legal".localeCompare(legalityString) === 0) {
      return {label: formatCleaned, legality: "Not Legal", colour: "danger"};
    } else if ("restricted".localeCompare(legalityString) === 0) {
      return {label: formatCleaned, legality: "Restricted", colour: "warning"};
    } else if ("banned".localeCompare(legalityString) === 0) {
      return {label: formatCleaned, legality: "Banned", colour: "danger"};
    } else {
      return {label: formatCleaned, legality: "Unsure", colour: "dark"};
    }
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

  render() {

    /*Display*/ 
    return (
      <ResultsDisplayComponent state={this.state} main={this}/>
    );
  }
 
};

export default ResultsDisplay;
