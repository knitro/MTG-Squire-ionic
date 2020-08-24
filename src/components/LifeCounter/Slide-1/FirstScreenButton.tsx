import React from 'react';

import { IonGrid, IonRow, IonCol, IonButton, IonLabel, IonSlides, IonSlide } from "@ionic/react";
import { updatePlayer, PlayersContextProvider, PlayersContextConsumer, Players } from "../../../states/LifeCounterPlayerState";
import { useState } from "react";

interface ButtonProps {
  rotation : number;
  division : number;
  player : number;
}

function getColour(p : number){
  if(p == 0)
    return "player-one"
  else if(p==1)
    return "player-two"
  else if(p==2)
    return "player-three"
  else 
    return "player-four"
}

function getTextClass(r : number){
  if(r == 0)
    return "text0"
  else if(r==90)
    return "text90"
  else if(r==180)
    return "text180"
  else 
    return "text270"
}

function getChange(rotation : number, division : number, pressValue : number){
  if(rotation == 0 || rotation == 180){
    //division over y axis
    if( pressValue >= ((window.innerHeight - 65) * division) ){
      return (rotation==0 ? -1 : 1);
    } else {
      return (rotation==0 ? 1 : -1);
    }
  } else { //90 or 270
    //division over x axis    
    if( pressValue >= (window.innerWidth * division) ){
      return (rotation==90 ? 1 : -1);
    } else {
      return (rotation==90 ? -1 : 1);
    }
  }
}


const FirstScreenButton = (props : ButtonProps) => {
    const [life,setLife] = useState(0)
    const player = props.player;
    const rotation = props.rotation;
    const division = props.division;
    return (

      <PlayersContextProvider>
        <PlayersContextConsumer>
          {(context : Players) => (
            <IonButton class="playerButton" expand="full"
            color={getColour(player)}
            onClick={e => {
              var pressValue = (rotation == 0 || rotation == 180) ? e.clientY : e.clientX;
              console.log(rotation,division,getChange(rotation,division,pressValue));
              console.log(pressValue,e.clientX,e.clientY);
              updatePlayer(context.players,player,getChange(rotation,division,pressValue));
              //change to function
              // if(e.clientY >= ((window.innerHeight - 65) * division)){
              //   updatePlayer(context.players,0,-1);
              // } else {
              //   updatePlayer(context.players,0,1);
              // }
              //function end
              setLife(context.players[player] == null ? 0 : context.players[player].lifeTotal)
                }}
                >
                  <IonLabel class={getTextClass(rotation)}>
                    {(
                      setLife(context.players[player] == null ? 0 : context.players[player].lifeTotal),
                      life
                    )}
                  </IonLabel>

                </IonButton>

            )}
            </PlayersContextConsumer>
          </PlayersContextProvider>

    )
}

export default FirstScreenButton;