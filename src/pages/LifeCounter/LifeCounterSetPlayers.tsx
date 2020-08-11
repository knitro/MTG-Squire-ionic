import React from 'react';
import { IonContent, IonPage, IonTitle, IonButton, IonRow, IonCol, IonGrid, IonCard } from '@ionic/react';
import './LifeCounterSetup.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { GameContextConsumer, Game, saveGame, GameContextProvider } from '../../states/LifeCounterSetupState';


const LifeCounterSetPlayers: React.FC = () => {
  return (

    <IonPage>
      <GameContextProvider>
      {/* Displays the Header */}
      <Header headerLabel="Life Counter - New Game"/>

      <IonContent>
        <IonRow>
          <IonCol>
            <IonButton class="lifeNavigationButtons" color="secondary" expand="full">
              Number of<br/> Players
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton class="lifeNavigationButtons" color="light" expand="full" href="/life-counter/set-life">
              Life Totals
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton class="lifeNavigationButtons" color="light" expand="full" href="/life-counter/confirm">
              Confirmation
            </IonButton>
          </IonCol>
        </IonRow>

        <IonTitle class="lifeTitle">Number of Players</IonTitle>
        <IonCard class="buttonCard">
        <GameContextConsumer>
          {(context : Game) => (
        <IonGrid class="buttonGrid">
          <IonRow class="buttonRow">
            <IonCol>
              <IonButton href="/life-counter/set-life" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ?
                saveGame({lifeTotal: context.lifeTotal, numberPlayers : 1}) :
                saveGame({lifeTotal: 20, numberPlayers : 1})
              }}
              >1</IonButton>
            </IonCol>
            <IonCol>
              <IonButton href="/life-counter/set-life" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ?
                saveGame({lifeTotal: context.lifeTotal, numberPlayers : 2}) :
                saveGame({lifeTotal: 20, numberPlayers : 2})
              }}
              >2</IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="buttonRow">
            <IonCol>
              <IonButton href="/life-counter/set-life" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ?
                saveGame({lifeTotal: context.lifeTotal, numberPlayers : 3}) :
                saveGame({lifeTotal: 40, numberPlayers : 3})
              }}
              >3</IonButton>
            </IonCol>
            <IonCol>
              <IonButton href="/life-counter/set-life" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ?
                saveGame({lifeTotal: context.lifeTotal, numberPlayers : 4}) :
                saveGame({lifeTotal: 40, numberPlayers : 4})
              }}
              >4</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
          )}
        </GameContextConsumer>
        </IonCard>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
    </GameContextProvider>
    </IonPage>
  );
};

export default LifeCounterSetPlayers;
