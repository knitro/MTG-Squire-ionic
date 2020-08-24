import React from 'react';
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import FirstScreenButton from './Slide-1/FirstScreenButton';

const LifeTotalThreePlayer = () => {
    return (
      <IonGrid class="playerGrid">
        <IonRow class="threePlayerRowUpper">
          <IonCol class="threePlayerColUpper">
            <FirstScreenButton rotation={180} division={1/6} player={0}/>
          </IonCol>
        </IonRow>
        <IonRow class="threePlayerRowLower">
          <IonCol class="threePlayerColLower">
            <FirstScreenButton rotation={90} division={0.25} player={1}/>
          </IonCol>
          <IonCol class="threePlayerColLower">
            <FirstScreenButton rotation={270} division={0.75} player={2}/>
          </IonCol>
        </IonRow>
      </IonGrid>
    )
}

export default LifeTotalThreePlayer;