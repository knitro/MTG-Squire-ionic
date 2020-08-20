import React from 'react';
import { IonPage, IonLabel, IonButton, IonGrid, IonCol, IonRow } from '@ionic/react';
import './LifeCounter.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { PlayersContextConsumer, Players, PlayersContextProvider } from '../../states/LifeCounterPlayerState';


const LifeCounter: React.FC = () => {
  return (

    <IonPage>
      <PlayersContextProvider>
      {/* <Header headerLabel="Life Counter"/> */}
      <PlayersContextConsumer>
          {(context : Players) => (
        // <IonLabel class="lifeText">
        //   players: {context.players.length}<div/>
        //   p1: {context.players[0] == null ? "NA" : context.players[0].lifeTotal}<div/>
        //   p2: {context.players[1] == null ? "NA" : context.players[1].lifeTotal}<div/>
        //   p3: {context.players[2] == null ? "NA" : context.players[2].lifeTotal}<div/>
        //   p4: {context.players[3] == null ? "NA" : context.players[3].lifeTotal}
        // </IonLabel>

        (context.players.length == 4) ? 
        // 4 player

        <IonGrid class="playerGrid">
          <IonRow class="fourPlayerRow">
            <IonCol class="fourPlayerCol">
              <IonButton class="fourPlayerButton" expand="full">
                {context.players[0] == null ? "NA" : context.players[0].lifeTotal}
              </IonButton>
            </IonCol>
            <IonCol class="fourPlayerCol">
              <IonButton class="fourPlayerButton" expand="full">
                {context.players[1] == null ? "NA" : context.players[1].lifeTotal}
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="fourPlayerRow">
            <IonCol class="fourPlayerCol">
              <IonButton class="fourPlayerButton" expand="full">
                {context.players[2] == null ? "NA" : context.players[2].lifeTotal}
              </IonButton>
            </IonCol>
            <IonCol class="fourPlayerCol">
              <IonButton class="fourPlayerButton" expand="full">
                {context.players[3] == null ? "NA" : context.players[1].lifeTotal}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        : (context.players.length == 3) ?
        //3 player

        <IonGrid class="playerGrid">
          <IonRow class="threePlayerRowUpper">
            <IonCol class="threePlayerColUpper">
              <IonButton class="threePlayerButton" expand="full">
                {context.players[0] == null ? "NA" : context.players[0].lifeTotal}
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="threePlayerRowLower">
            <IonCol class="threePlayerColLower">
              <IonButton class="threePlayerButton" expand="full">
                {context.players[1] == null ? "NA" : context.players[1].lifeTotal}
              </IonButton>
            </IonCol>
            <IonCol class="threePlayerColLower">
              <IonButton class="threePlayerButton" expand="full">
                {context.players[2] == null ? "NA" : context.players[2].lifeTotal}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        : (context.players.length == 3) ?

        // 2 player

        <IonGrid class="playerGrid">
          <IonRow class="twoPlayerRow">
            <IonCol class="twoPlayerCol">
              <IonButton class="twoPlayerButton" expand="full">
                {context.players[0] == null ? "NA" : context.players[0].lifeTotal}
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="twoPlayerRow">
            <IonCol class="twoPlayerCol">
              <IonButton class="twoPlayerButton" expand="full">
                {context.players[1] == null ? "NA" : context.players[1].lifeTotal}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        //1 player
        :
        <IonGrid class="playerGrid">
          <IonRow class="onePlayerRow">
            <IonCol class="onePlayerCol">
              <IonButton class="onePlayerButton" expand="full">
                {context.players[0] == null ? "NA" : context.players[0].lifeTotal}
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
