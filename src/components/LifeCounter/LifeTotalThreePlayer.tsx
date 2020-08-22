import React from 'react';

import { IonGrid, IonRow, IonCol, IonButton, IonLabel } from "@ionic/react";
import { updatePlayer, PlayersContextProvider, PlayersContextConsumer, Players } from "../../states/LifeCounterPlayerState";
import { useState } from "react";

const LifeTotalThreePlayer = () => {
    const [p1Life,setP1Life] = useState(0)
    const [p2Life,setP2Life] = useState(0)
    const [p3Life,setP3Life] = useState(0)
    return (
      <PlayersContextProvider>
      <PlayersContextConsumer>
          {(context : Players) => (
        <IonGrid class="playerGrid">
        <IonRow class="threePlayerRowUpper">
          <IonCol class="threePlayerColUpper">
            <IonButton class="threePlayerButton" expand="full"
            onClick={e => {
              if(e.clientY >= ((window.innerHeight - 65)/6)){
                updatePlayer(context.players,0,1);
              } else {
                updatePlayer(context.players,0,-1);
              }
              setP1Life(context.players[0] == null ? 0 : context.players[0].lifeTotal)
            }}
            >
              <IonLabel class="text180">
                {(
                  setP1Life(context.players[0] == null ? 0 : context.players[0].lifeTotal),
                  p1Life
                )}
              </IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow class="threePlayerRowLower">
          <IonCol class="threePlayerColLower">
            <IonButton class="threePlayerButton" expand="full"
            onClick={e => {
              if(e.clientX >= (window.innerWidth/4)){
                updatePlayer(context.players,1,1);
              } else {
                updatePlayer(context.players,1,-1);
              }
              setP2Life(context.players[1] == null ? 0 : context.players[1].lifeTotal)
            }}
            >
              <IonLabel class="text90">
                {(
                  setP2Life(context.players[1] == null ? 0 : context.players[1].lifeTotal),
                  p2Life
                )}
              </IonLabel>
            </IonButton>
          </IonCol>
          <IonCol class="threePlayerColLower">
            <IonButton class="threePlayerButton" expand="full"
            onClick={e => {
              if(e.clientX >= (window.innerWidth * 3/4)){
                updatePlayer(context.players,2,-1);
              } else {
                updatePlayer(context.players,2,1);
              }
              setP3Life(context.players[2] == null ? 0 : context.players[2].lifeTotal)
            }}
            >
              <IonLabel class="text270">
                {(
                  setP3Life(context.players[2] == null ? 0 : context.players[2].lifeTotal),
                  p3Life
                )}
              </IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
        )}
        </PlayersContextConsumer>
        </PlayersContextProvider>
          
    )
}

export default LifeTotalThreePlayer;