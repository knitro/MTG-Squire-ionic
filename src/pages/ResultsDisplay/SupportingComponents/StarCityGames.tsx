import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { SearchState } from '../../../states/SearchState';
import uuid from 'uuid';
import { Plugins } from '@capacitor/core';

////////////////////////
/*Variable Initialisation*/
////////////////////////

const { Browser } = Plugins;

////////////////////////
/*Supporting Functions*/
////////////////////////


function createSCGLink(cardName : string, setCode : string, collector_number : string, isFoil : boolean) {

  const baseLink : string = "https://starcitygames.com/";

  let cardNameFormatted : string = cardName.toLowerCase();
  cardNameFormatted = cardNameFormatted.split(" ").join("-");
  cardNameFormatted = cardNameFormatted.split("'").join("");
  cardNameFormatted = cardNameFormatted.split(",").join("");
  

  const setCodeFormatted : string = setCode.toLowerCase();
  const collectorNumberFormatted : string = collector_number.toLowerCase();
  const foilingString : string = (isFoil) ? ("enf/") : ("enn/");  

  const returnString : string = baseLink + cardNameFormatted + "-sgl-mtg-" + setCodeFormatted + "-" + collectorNumberFormatted + "-" + foilingString;
  return returnString;
}

function createNonFoilCard(currentSearchState : SearchState) {
  if (currentSearchState.misc.nonfoil && !currentSearchState.misc.digital_only) {
    const currentLink : string = createSCGLink(currentSearchState.cardName, currentSearchState.set.setCode, currentSearchState.misc.collector_number, false);
    return createCard("Non-Foil", "StarCityGames", currentLink);
  } else {
    return (<></>);
  }
}

function createFoilCard(currentSearchState : SearchState) {
  if (currentSearchState.misc.foil && !currentSearchState.misc.digital_only)  {
    const currentLink : string = createSCGLink(currentSearchState.cardName, currentSearchState.set.setCode, currentSearchState.misc.collector_number, true);
    return createCard("Foil", "StarCityGames", currentLink);
  } else {
    return (<></>);
  }
}

function createCard(subtitle: string, title: string, link : string) {
  return (
    <IonCard button={true} class="fullScreenCard" key={uuid.v4() }
      onClick={async e => {
        await Browser.open({ url: link });
      }}
    >
      <IonCardHeader>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {link}
      </IonCardContent>
    </IonCard>
  );
}

////////////////////////
/*Component Code*/
////////////////////////

interface StarCityGamesProps {
  search : SearchState
}

const StarCityGames = (props : StarCityGamesProps) => {

  /*Variable Initialisation*/
  const currentSearchState : SearchState = props.search;

  /*Return*/
  return (
    <div key={uuid.v4()}>
      {createNonFoilCard(currentSearchState)}
      {createFoilCard(currentSearchState)}
    </div>
  );
}

export default StarCityGames;