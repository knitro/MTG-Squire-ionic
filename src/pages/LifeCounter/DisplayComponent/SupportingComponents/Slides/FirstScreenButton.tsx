import React from 'react';
import { IonButton, IonLabel } from "@ionic/react";
import { updatePlayer, PlayersContextProvider, PlayersContextConsumer, Players } from "../../../../../states/LifeCounterPlayerState";
import { useState } from "react";
import { ButtonProps, getColour, getChange, getTextClass } from '../../../Logic/SlidesHelper';

/**
 * First Screen Button displays the health of the user.
 * @param props - the settings of the button
 */
const FirstScreenButton = (props : ButtonProps) => {

  /*Variable Initialisation*/ 
  const player = props.player;
  const rotation = props.rotation;
  const division = props.division;

  /*Hooks*/
  const [life, setLife] = useState(0)
  
  return (

    <PlayersContextProvider>
      <PlayersContextConsumer>
        {(context : Players) => (
          <IonButton class="playerButton" expand="full"
          color={getColour(player)}
          onClick={async (e) => {
            //get press value of required rotation
            var pressValue = (rotation === 0 || rotation === 180) ? e.clientY : e.clientX;

            //get change and update storage and hook
            await updatePlayer(context.players, player, getChange(rotation,division,pressValue), 'lifeTotal');
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