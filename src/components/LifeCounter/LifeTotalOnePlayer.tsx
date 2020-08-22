import React from 'react';

import { IonGrid, IonRow, IonCol, IonButton, IonLabel } from "@ionic/react";
import { updatePlayer, PlayersContextProvider, PlayersContextConsumer, Players } from "../../states/LifeCounterPlayerState";
import { useState } from "react";

const LifeTotalOnePlayer = () => {
    const [p1Life,setP1Life] = useState(0)
    return (
      <PlayersContextProvider>
      <PlayersContextConsumer>
          {(context : Players) => (
        <IonGrid class="playerGrid">
          <IonRow class="onePlayerRow">
            <IonCol class="onePlayerCol">
              <IonButton class="onePlayerButton" expand="full"
              color="player-one"
              onClick={e => {
                // console.log('x:',e.clientX,'/',window.innerWidth,':',(e.clientX - window.innerWidth));
                // console.log('y:',e.clientY,'/',window.innerHeight,':',(e.clientY - window.innerHeight));
                if(e.clientY >= ((window.innerHeight - 65)/2)){
                  updatePlayer(context.players,0,-1);
                } else {
                  updatePlayer(context.players,0,1);
                }
                setP1Life(context.players[0] == null ? 0 : context.players[0].lifeTotal)
              }}
              >
                <IonLabel class="text0">
                  {(
                    setP1Life(context.players[0] == null ? 0 : context.players[0].lifeTotal),
                    p1Life
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

export default LifeTotalOnePlayer;