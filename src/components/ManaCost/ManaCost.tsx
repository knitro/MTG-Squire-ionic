import React, { Component } from 'react';
import { IonImg, IonRow } from "@ionic/react";
import './ManaCost.css';
import uuid from 'uuid';
import { getSearchState } from '../../states/SearchState';

////////////////////////
/*Interfaces*/
////////////////////////

/**
 * The Main Interface.
 * This is used as for the "static database" to map a tag to an asset image link.
 */
export interface symbolToImageInterface {
  tag: string
  dir : string
}

// class ManaCost extends Component<{cost : ManaCostProps}> {
class ManaCost extends Component<{cost : string}> {

  ////////////////////////
  /*Constants*/
  ////////////////////////

  static symbolToImageCollection : symbolToImageInterface[]= [
    {tag: "0", dir: "assets/img/0.png"},
    {tag: "1", dir: "assets/img/1.png"},
    {tag: "2", dir: "assets/img/2.png"},
    {tag: "2B", dir: "assets/img/2B.png"},
    {tag: "2G", dir: "assets/img/2G.png"},
    {tag: "2R", dir: "assets/img/2R.png"},
    {tag: "2U", dir: "assets/img/2U.png"},
    {tag: "3", dir: "assets/img/3.png"},
    {tag: "4", dir: "assets/img/4.png"},
    {tag: "5", dir: "assets/img/5.png"},
    {tag: "6", dir: "assets/img/6.png"},
    {tag: "7", dir: "assets/img/7.png"},
    {tag: "8", dir: "assets/img/8.png"},
    {tag: "9", dir: "assets/img/9.png"},
    {tag: "10", dir: "assets/img/10.png"},
    {tag: "11", dir: "assets/img/11.png"},
    {tag: "12", dir: "assets/img/12.png"},
    {tag: "13", dir: "assets/img/13.png"},
    {tag: "14", dir: "assets/img/14.png"},
    {tag: "15", dir: "assets/img/15.png"},
    {tag: "16", dir: "assets/img/16.png"},
    {tag: "17", dir: "assets/img/17.png"},
    {tag: "18", dir: "assets/img/18.png"},
    {tag: "19", dir: "assets/img/19.png"},
    {tag: "20", dir: "assets/img/20.png"},
    {tag: "B", dir: "assets/img/B.png"},
    {tag: "BG", dir: "assets/img/BG.png"},
    {tag: "BP", dir: "assets/img/BP.png"},
    {tag: "BR", dir: "assets/img/BR.png"},
    {tag: "C", dir: "assets/img/C.png"},
    {tag: "G", dir: "assets/img/G.png"},
    {tag: "GP", dir: "assets/img/GP.png"},
    {tag: "GU", dir: "assets/img/GU.png"},
    {tag: "GW", dir: "assets/img/GW.png"},
    {tag: "R", dir: "assets/img/R.png"},
    {tag: "RG", dir: "assets/img/RG.png"},
    {tag: "RP", dir: "assets/img/RP.png"},
    {tag: "RW", dir: "assets/img/RW.png"},
    {tag: "S", dir: "assets/img/S.png"},
    {tag: "U", dir: "assets/img/U.png"},
    {tag: "UB", dir: "assets/img/UB.png"},
    {tag: "UP", dir: "assets/img/UP.png"},
    {tag: "UR", dir: "assets/img/UR.png"},
    {tag: "W", dir: "assets/img/W.png"},
    {tag: "WB", dir: "assets/img/WB.png"},
    {tag: "WP", dir: "assets/img/WP.png"},
    {tag: "WU", dir: "assets/img/WU.png"},
    {tag: "X", dir: "assets/img/X.png"}
  ];

  ////////////////////////
  /*Fields*/
  ////////////////////////

  currentCost : string;

  ////////////////////////
  /*Constructor*/
  ////////////////////////

  constructor(props : any) {
    super(props)
    this.currentCost = props.cost;
  }

  ////////////////////////
  /*Methods*/
  ////////////////////////

  async componentDidMount() {
    this.currentCost = (await getSearchState()).manaCost;
  }

  /**
   * Parses the Entire Mana Cost as per the parameter.
   * It should call determineSymbol(string) for each symbol it comes across.
   * Each symbol is represented through {} brackets.
   * @param manaCostString - the SideBarItem to render
   */
  parseManaCost (manaCostString: string) {

    let removedString : string = manaCostString.substr(1,manaCostString.length-2);
    let splitString : string[] = removedString.split("}{");

    return (
      <>
        { splitString.map((currentSplit: string) => this.determineSymbol(currentSplit)) }
      </>
    );
  }

  /**
   * Returns an Image represented by the parameter.
   * It retrieves the image from the static field "symbolToImageCollection".
   * If the symbol is unrecognised, it 
   * @param symbol 
   */
  determineSymbol(symbol : string) {

    let currentDirectory : string = "assets/img/0.png"; //Default Value

    ManaCost.symbolToImageCollection.forEach(
      currentInterface => {
        if (currentInterface.tag === symbol) {
          currentDirectory = currentInterface.dir;
        }
      }
    );

    return (
      <IonImg key={uuid.v4()} src={currentDirectory} class="symbolImage" / >
    );
  }

  ////////////////////////
  /*Render*/
  ////////////////////////

  render() {
    return (
      <IonRow class="manaCostRow">
        {this.parseManaCost(this.currentCost)}
      </IonRow>
    );
  }
}

export default ManaCost;