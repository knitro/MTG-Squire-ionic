import React from 'react';
import './LifeCounterSlide2.css';
import { IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";
import { PlayersContextProvider, PlayersContextConsumer, Players } from "../../../../states/LifeCounterPlayerState";
import { ButtonProps, getColour, getSubName } from './SlidesHelper';
import SubScreenButton from './SubScreenButton';


const SecondScreenButton= (props : ButtonProps) => {
  return (
    (props.rotation === 0 || props.rotation === 180) 
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
    const reverseOrder = (rotation === 180);
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
              <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(0,reverseOrder)}/>
            </IonCol>
            <IonCol class="slide2ColHorizontal">
              <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(1,reverseOrder)}/>
            </IonCol>
            <IonCol class="slide2ColHorizontal">
              <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(2,reverseOrder)}/>
            </IonCol>
            <IonCol class="slide2ColHorizontal">
              <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(3,reverseOrder)}/>
            </IonCol>
            <IonCol class="slide2ColHorizontal">
              <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(4,reverseOrder)}/>
            </IonCol>
            <IonCol class="slide2ColHorizontal">
              <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(5,reverseOrder)}/>
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
  const reverseOrder = (rotation === 270);
  return (
    <IonButton class="playerButton" expand="full" 
    color={getColour(player)}
    >
      <IonGrid class="slide2Grid">
        <IonRow class="slide2RowVertical">
          <IonCol class="slide2ColVertical">
            <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(0,reverseOrder)}/>
          </IonCol>
        </IonRow>
        <IonRow class="slide2RowVertical">
          <IonCol class="slide2ColVertical">
          <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(1,reverseOrder)}/>
          </IonCol>
        </IonRow>
        <IonRow class="slide2RowVertical">
          <IonCol class="slide2ColVertical">
            <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(2,reverseOrder)}/>
          </IonCol>
        </IonRow>
        <IonRow class="slide2RowVertical">
          <IonCol class="slide2ColVertical">
            <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(3,reverseOrder)}/>
          </IonCol>
        </IonRow>
        <IonRow class="slide2RowVertical">
          <IonCol class="slide2ColVertical">
            <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(4,reverseOrder)}/>
          </IonCol>
        </IonRow>
        <IonRow class="slide2RowVertical">
          <IonCol class="slide2ColVertical">
          <SubScreenButton rotation={rotation} division={division} player={player} option={getSubName(5,reverseOrder)}/>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonButton>
  )
}

export default SecondScreenButton;