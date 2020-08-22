import React, { useState } from 'react';
import { IonPage, IonLabel, IonButton, IonGrid, IonCol, IonRow } from '@ionic/react';
import './LifeCounter.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { PlayersContextConsumer, Players, PlayersContextProvider, updatePlayer } from '../../states/LifeCounterPlayerState';


const LifeCounter: React.FC = () => {
  const [count,setCount] = useState(0);
  return (

    <IonPage>
      <PlayersContextProvider>
      {/* <Header headerLabel="Life Counter"/> */}
      <PlayersContextConsumer>
          {(context : Players) => (
        (context.players.length == 4) ? // if 4 players
        <IonGrid class="playerGrid">
          <IonRow class="fourPlayerRow">
            <IonCol class="fourPlayerCol">
              <IonButton class="fourPlayerButton" expand="full">
                <IonLabel class="text90">
                  {context.players[0] == null ? "NA" : context.players[0].lifeTotal}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol class="fourPlayerCol">
              <IonButton class="fourPlayerButton" expand="full">
                <IonLabel class="text270">
                  {context.players[1] == null ? "NA" : context.players[1].lifeTotal}
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="fourPlayerRow">
            <IonCol class="fourPlayerCol">
              <IonButton class="fourPlayerButton" expand="full">
                <IonLabel class="text90">
                  {context.players[2] == null ? "NA" : context.players[2].lifeTotal}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol class="fourPlayerCol">
              <IonButton class="fourPlayerButton" expand="full">
                <IonLabel class="text270">
                  {context.players[3] == null ? "NA" : context.players[1].lifeTotal}
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        
        : (context.players.length == 3) ? //if 3 players
        <IonGrid class="playerGrid">
          <IonRow class="threePlayerRowUpper">
            <IonCol class="threePlayerColUpper">
              <IonButton class="threePlayerButton" expand="full">
                <IonLabel class="text180">
                  {context.players[0] == null ? "NA" : context.players[0].lifeTotal}
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="threePlayerRowLower">
            <IonCol class="threePlayerColLower">
              <IonButton class="threePlayerButton" expand="full">
                <IonLabel class="text90">
                  {context.players[1] == null ? "NA" : context.players[1].lifeTotal}
                </IonLabel>
              </IonButton>
            </IonCol>
            <IonCol class="threePlayerColLower">
              <IonButton class="threePlayerButton" expand="full">
                <IonLabel class="text270">
                  {context.players[2] == null ? "NA" : context.players[2].lifeTotal}
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        
        : (context.players.length == 2) ? // if 2 players
        <IonGrid class="playerGrid">
          <IonRow class="twoPlayerRow">
            <IonCol class="twoPlayerCol">
              <IonButton class="twoPlayerButton" expand="full">
                <IonLabel class="text180">
                  {context.players[0] == null ? "NA" : context.players[0].lifeTotal}
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="twoPlayerRow">
            <IonCol class="twoPlayerCol">
              <IonButton class="twoPlayerButton" expand="full">
                <IonLabel class="text0">
                  {context.players[1] == null ? "NA" : context.players[1].lifeTotal}
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        : //if 1 player
        <IonGrid class="playerGrid">
          <IonRow class="onePlayerRow">
            <IonCol class="onePlayerCol">
              <IonButton class="onePlayerButton" expand="full"
              onClick={e => {
                // console.log('y',e.clientX,'/',window.innerWidth);
                // console.log('y',e.clientY,'/',window.innerHeight);
                if(e.clientY > window.innerHeight/2){
                  updatePlayer(context.players,0,-1);
                } else {
                  updatePlayer(context.players,0,1);
                }
                setCount(context.players[0] == null ? 0 : context.players[0].lifeTotal)
              }}
              >
                <IonLabel class="text0">
                  {(setCount(context.players[0] == null ? 0 : context.players[0].lifeTotal),count)}
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        )}
      </PlayersContextConsumer>
      <FooterTabs/>
      </PlayersContextProvider>
    </IonPage>
  );
};

export default LifeCounter;
