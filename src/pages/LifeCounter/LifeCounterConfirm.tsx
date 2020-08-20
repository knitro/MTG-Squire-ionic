import React from 'react';
import { IonContent, IonPage, IonTitle, IonButton, IonGrid, IonLabel, IonRow, IonCol } from '@ionic/react';
import './LifeCounterSetup.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { GameContextConsumer, Game, GameContextProvider } from '../../states/LifeCounterSetupState';
import { createPlayers, PlayersContextProvider } from '../../states/LifeCounterPlayerState';


const LifeCounterConfirm: React.FC = () => {
  return (

    <IonPage>
      <GameContextProvider><PlayersContextProvider>
      {/* Displays the Header */}
      <Header headerLabel="Life Counter - New Game"/>

      <IonContent>

      <IonRow>
          <IonCol>
            <IonButton class="lifeNavigationButtons" color="light" expand="full" href="/life-counter/set-players">
              Number of<br/> Players
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton class="lifeNavigationButtons" color="light" expand="full" href="/life-counter/set-life">
              Life Totals
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton class="lifeNavigationButtons" color="secondary" expand="full">
              Confirmation
            </IonButton>
          </IonCol>
        </IonRow>

        <IonTitle class="lifeTitle">
          Confirm Options
        </IonTitle>
        <GameContextConsumer>
          {(context : Game) => (
        <IonGrid>
        <IonLabel class="lifeText">
          Number of players: {context.numberPlayers}<div/>
          Starting life: {context.lifeTotal}
        </IonLabel>
        <IonButton class="lifeStartButton" href="/life-counter/game" shape="round" color="tertiary"
            onClick={e => {
              createPlayers(context);
            }}>
            Start <br/>Game
          </IonButton>
          </IonGrid>
        )}
        </GameContextConsumer>
      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      </PlayersContextProvider></GameContextProvider>
    </IonPage>
  );
};

export default LifeCounterConfirm;
