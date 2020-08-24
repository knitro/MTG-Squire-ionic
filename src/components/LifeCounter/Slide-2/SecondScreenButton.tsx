import React from 'react';

import { IonGrid, IonRow, IonCol, IonButton, IonLabel, IonSlides, IonSlide } from "@ionic/react";
import { updatePlayer, PlayersContextProvider, PlayersContextConsumer, Players } from "../../../states/LifeCounterPlayerState";
import { useState } from "react";

interface ButtonProps {
  rotation : number;
  division : number;
}

const SecondScreenButton = (props : ButtonProps) => {
    const [p1Life,setP1Life] = useState(0)
    return (
            <IonButton class="onePlayerButton" expand="full" color="player-one">
            <IonLabel class="text0">{props.rotation}</IonLabel>
            <IonLabel class="text0">Slide 2</IonLabel>
            <IonLabel class="text0">{props.division}</IonLabel>
            </IonButton>
    )
}

export default SecondScreenButton;