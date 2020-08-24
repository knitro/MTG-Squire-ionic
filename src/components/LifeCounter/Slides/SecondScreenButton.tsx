import React from 'react';
import './LifeCounterSlide2.css';
import { IonGrid, IonRow, IonCol, IonButton, IonLabel, } from "@ionic/react";
import { updatePlayer, PlayersContextProvider, PlayersContextConsumer, Players } from "../../../states/LifeCounterPlayerState";
import { useState } from "react";
import { ButtonProps, getTextClass, getColour } from './SlidesHelper';
import SubScreenButton from './SubScreenButton';


const SecondScreenButton= (props : ButtonProps) => {
  return (
    (props.rotation == 0 || props.rotation == 180) 
    ? 
      <SecondScreenButtonHorizontal rotation={props.rotation} division={props.division} player={props.player}/>
    : 
      <SecondScreenButtonVertical   rotation={props.rotation} division={props.division} player={props.player}/>
  )
}

const SecondScreenButtonHorizontal = (props : ButtonProps) => {
    const player = props.player;
    const rotation = props.rotation;
    const division = props.division;
    return (
      
      <PlayersContextProvider>
      <PlayersContextConsumer>
      {(context : Players) => (

      <IonButton class="playerButton" expand="full" 
      color={getColour(player)}
      >
        <IonGrid class="slide2Grid">
          <IonRow class="slide2RowHorizontal">
            <IonCol class="slide2ColHorizontal">
              <SubScreenButton rotation={rotation} division={division} player={player} option={'valueW'}/>
            </IonCol>
            <IonCol class="slide2ColHorizontal">
              <SubScreenButton rotation={rotation} division={division} player={player} option={'valueU'}/>
            </IonCol>
            <IonCol class="slide2ColHorizontal">
              <SubScreenButton rotation={rotation} division={division} player={player} option={'valueB'}/>
            </IonCol>
            <IonCol class="slide2ColHorizontal">
              <SubScreenButton rotation={rotation} division={division} player={player} option={'valueR'}/>
            </IonCol>
            <IonCol class="slide2ColHorizontal">
              <SubScreenButton rotation={rotation} division={division} player={player} option={'valueG'}/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonButton>


      )}
      </PlayersContextConsumer>
      </PlayersContextProvider>

    )
}

const SecondScreenButtonVertical = (props : ButtonProps) => {
  const player = props.player;
  const rotation = props.rotation;
  const division = props.division;
  return (
    <IonButton class="playerButton" expand="full" 
    color={getColour(player)}
    >
      <IonGrid class="slide2Grid">
        <IonRow class="slide2RowVertical">
          <IonCol class="slide2ColVertical">
            <SubScreenButton rotation={rotation} division={division} player={player} option={'valueW'}/>
          </IonCol>
        </IonRow>
        <IonRow class="slide2RowVertical">
          <IonCol class="slide2ColVertical">
          <SubScreenButton rotation={rotation} division={division} player={player} option={'valueU'}/>
          </IonCol>
        </IonRow>
        <IonRow class="slide2RowVertical">
          <IonCol class="slide2ColVertical">
            <SubScreenButton rotation={rotation} division={division} player={player} option={'valueB'}/>
          </IonCol>
        </IonRow>
        <IonRow class="slide2RowVertical">
          <IonCol class="slide2ColVertical">
            <SubScreenButton rotation={rotation} division={division} player={player} option={'valueR'}/>
          </IonCol>
        </IonRow>
        <IonRow class="slide2RowVertical">
          <IonCol class="slide2ColVertical">
          <SubScreenButton rotation={rotation} division={division} player={player} option={'valueG'}/>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonButton>
  )
}

export default SecondScreenButton;