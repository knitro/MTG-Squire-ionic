import React from 'react';

import { IonButton, IonLabel, IonImg } from "@ionic/react";
import { updatePlayer, PlayersContextProvider, PlayersContextConsumer, Players } from "../../../states/LifeCounterPlayerState";
import { useState } from "react";
import { getColour, getChange, getTextClass, SubButtonProps, getSubValue, getImageClass, getFile } from './SlidesHelper';



const SubScreenButton = (props : SubButtonProps ) => {
    const [life,setLife] = useState(0)
    const player = props.player;
    const rotation = props.rotation;
    const division = props.division;
    const option = props.option;
    return (

      <PlayersContextProvider>
        <PlayersContextConsumer>
          {(context : Players) => (
            <IonButton class="slide2Button" expand="full"
            color={getColour(player)}
            onClick={e => {
              var pressValue = (rotation == 0 || rotation == 180) ? e.clientY : e.clientX;
              updatePlayer(context.players,player,getChange(rotation,division,pressValue),option);
              setLife(getSubValue(context,player,option))
            }}
            >
              {/* <IonImg class={getImageClass(rotation)} src={getFile(option)}/> */}
              <IonLabel class={getTextClass(rotation)}>{(
                setLife(getSubValue(context,player,option)),
                life
              )}</IonLabel>
            </IonButton>
            )}
            </PlayersContextConsumer>
          </PlayersContextProvider>
    )
}

export default SubScreenButton;