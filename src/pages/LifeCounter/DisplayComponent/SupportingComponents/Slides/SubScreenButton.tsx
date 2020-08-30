import React from 'react';
import { IonButton, IonLabel } from "@ionic/react";
import { updatePlayer, PlayersContextProvider, PlayersContextConsumer, Players } from "../../../../../states/LifeCounterPlayerState";
import { useState } from "react";
import { getChange, getTextClass, SubButtonProps, getSubValue, getSubColour } from '../../../Logic/SlidesHelper';


/**
 * Singular button of second page of slider
 * @param props - player, rotation, division and option of subscreen
 */
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
            <IonButton class="slide2Button" 
            color={getSubColour(option)}
            onClick={async (e) => {              
              //get press value of required rotation
              var pressValue = (rotation === 0 || rotation === 180) ? e.clientY : e.clientX;
              
              //get change and update storage and hook
              await updatePlayer(context.players,player,getChange(rotation,division,pressValue),option);
              setLife(getSubValue(context,player,option))
            }}
            >
              <IonLabel color="dark" class={getTextClass(rotation,true)}>{(
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