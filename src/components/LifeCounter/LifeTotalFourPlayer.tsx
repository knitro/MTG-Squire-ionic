import React from 'react';
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import FirstScreenButton from './Slide-1/FirstScreenButton';

const LifeTotalFourPlayer = () => {
    return (
      <IonGrid class="playerGrid">
        <IonRow class="fourPlayerRow">
          <IonCol class="fourPlayerCol">
            <FirstScreenButton rotation={90} division={0.25} player={0}/>
          </IonCol>
          <IonCol class="fourPlayerCol">
            <FirstScreenButton rotation={270} division={0.75} player={1}/>
          </IonCol>
        </IonRow>
        <IonRow class="fourPlayerRow">
          <IonCol class="fourPlayerCol">
            <FirstScreenButton rotation={90} division={0.25} player={2}/>
          </IonCol>
          <IonCol class="fourPlayerCol">
            <FirstScreenButton rotation={270} division={0.75} player={3}/>
          </IonCol>
        </IonRow>
      </IonGrid>
    )
}

export default LifeTotalFourPlayer;