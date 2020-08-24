import React from 'react';
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import FirstScreenButton from './Slide-1/FirstScreenButton';

const LifeTotalTwoPlayer = () => {
    return (
        <IonGrid class="playerGrid">
        <IonRow class="twoPlayerRow">
          <IonCol class="twoPlayerCol">
            <FirstScreenButton rotation={180} division={0.25} player={0}/>
          </IonCol>
        </IonRow>
        <IonRow class="twoPlayerRow">
          <IonCol class="twoPlayerCol">
            <FirstScreenButton rotation={0} division={0.75} player={1}/>
          </IonCol>
        </IonRow>
      </IonGrid>
    )
}

export default LifeTotalTwoPlayer;