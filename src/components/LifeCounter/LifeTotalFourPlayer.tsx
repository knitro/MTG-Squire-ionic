import React from 'react';

import { IonGrid, IonRow, IonCol, IonButton, IonLabel } from "@ionic/react";
import { updatePlayer, PlayersContextProvider, PlayersContextConsumer, Players } from "../../states/LifeCounterPlayerState";
import { useState } from "react";

const LifeTotalFourPlayer = () => {
    const [p1Life,setP1Life] = useState(0)
    const [p2Life,setP2Life] = useState(0)
    const [p3Life,setP3Life] = useState(0)
    const [p4Life,setP4Life] = useState(0)
    return (
      <PlayersContextProvider>
      <PlayersContextConsumer>
          {(context : Players) => (
            <IonGrid class="playerGrid">
            <IonRow class="fourPlayerRow">
              <IonCol class="fourPlayerCol">
                <IonButton class="fourPlayerButton" expand="full"
                onClick={e => {
                  if(e.clientX >= (window.innerWidth/4)){
                    updatePlayer(context.players,0,1);
                  } else {
                    updatePlayer(context.players,0,-1);
                  }
                  setP1Life(context.players[0] == null ? 0 : context.players[0].lifeTotal)
                }}
                >
                  <IonLabel class="text90">
                    {(
                      setP1Life(context.players[0] == null ? 0 : context.players[0].lifeTotal),
                      p1Life
                    )}
                  </IonLabel>
                </IonButton>
              </IonCol>
              <IonCol class="fourPlayerCol">
                <IonButton class="fourPlayerButton" expand="full"
                onClick={e => {
                  if(e.clientX >= (window.innerWidth * 3/4)){
                    updatePlayer(context.players,1,-1);
                  } else {
                    updatePlayer(context.players,1,1);
                  }
                  setP2Life(context.players[1] == null ? 0 : context.players[1].lifeTotal)
                }}
                >
                  <IonLabel class="text270">
                    {(
                      setP2Life(context.players[1] == null ? 0 : context.players[1].lifeTotal),
                      p2Life
                    )}
                  </IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow class="fourPlayerRow">
              <IonCol class="fourPlayerCol">
                <IonButton class="fourPlayerButton" expand="full"
                onClick={e => {
                  if(e.clientX >= (window.innerWidth/4)){
                    updatePlayer(context.players,2,1);
                  } else {
                    updatePlayer(context.players,2,-1);
                  }
                  setP3Life(context.players[2] == null ? 0 : context.players[2].lifeTotal)
                }}
                >
                  <IonLabel class="text90">
                    {(
                      setP3Life(context.players[2] == null ? 0 : context.players[2].lifeTotal),
                      p3Life
                    )}
                  </IonLabel>
                </IonButton>
              </IonCol>
              <IonCol class="fourPlayerCol">
                <IonButton class="fourPlayerButton" expand="full"
                onClick={e => {
                  if(e.clientX >= (window.innerWidth*3/4)){
                    updatePlayer(context.players,3,-1);
                  } else {
                    updatePlayer(context.players,3,1);
                  }
                  setP4Life(context.players[3] == null ? 0 : context.players[3].lifeTotal)
                }}
                >
                  <IonLabel class="text270">
                    {(
                      setP4Life(context.players[3] == null ? 0 : context.players[3].lifeTotal),
                      p4Life
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

export default LifeTotalFourPlayer;