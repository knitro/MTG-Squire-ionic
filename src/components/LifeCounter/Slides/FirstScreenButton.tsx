import React from 'react';

import { IonGrid, IonRow, IonCol, IonButton, IonLabel, IonSlides, IonSlide } from "@ionic/react";
import { updatePlayer, PlayersContextProvider, PlayersContextConsumer, Players } from "../../../states/LifeCounterPlayerState";
import { useState } from "react";
import { ButtonProps, getColour, getChange, getTextClass } from './SlidesHelper';

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
              updatePlayer(context.players,player,getChange(rotation,division,pressValue),'lifeTotal');
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