import React from 'react';
import { IonButton, IonLabel } from "@ionic/react";
import { updatePlayer, PlayersContextProvider, PlayersContextConsumer, Players } from "../../../../../states/LifeCounterPlayerState";
import { useState } from "react";
import { ButtonProps, getColour, getChange, getTextClass } from '../../../Logic/SlidesHelper';

const FirstScreenButton = (props : ButtonProps) => {
  // variable initization 
  const player = props.player;
  const rotation = props.rotation;
  const division = props.division;

  // hooks
  const [life,setLife] = useState(0)
  
  return (

    <PlayersContextProvider>
      <PlayersContextConsumer>
        {(context : Players) => (
          <IonButton class="playerButton" expand="full"
          color={getColour(player)}
          onClick={e => {
            //get press value of required rotation
            var pressValue = (rotation === 0 || rotation === 180) ? e.clientY : e.clientX;

            //get change and update storage and hook
            updatePlayer(context.players,player,getChange(rotation,division,pressValue),'lifeTotal');
            setLife(context.players[player] == null ? 0 : context.players[player].lifeTotal)
              }}
              >
                <IonLabel class={getTextClass(rotation,false)}>
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