import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonRow, IonCol, IonGrid, IonInput, IonCard } from '@ionic/react';
import './LifeCounterSetup.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { GameContextConsumer, Game, saveGame, GameContextProvider } from '../../LifeTotalStore';

const LifeCounterSetLife: React.FC = () => {
  return (

    <IonPage>
      <GameContextProvider>
      {/* Displays the Header */}
      <Header headerLabel="Life Counter - New Game"/>

      <IonContent>

        <IonRow>
          <IonCol>
            <IonButton class="lifeNavigationButtons" color="light" expand="full">
              Number of<br/> Players
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton class="lifeNavigationButtons" color="secondary" expand="full">
              Life Totals
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton class="lifeNavigationButtons" color="light" expand="full">
              Confirmation
            </IonButton>
          </IonCol>
        </IonRow>

        <IonTitle class="lifeTitle">Starting Life Total</IonTitle>

        <IonCard class="buttonCard">
        <GameContextConsumer>
          {(context : Game) => (
        <IonGrid class="buttonGrid">
          <IonRow class="buttonRow">
            <IonCol>
              <IonButton href="/life-counter/confirm" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ?
                saveGame({lifeTotal: 20, numberPlayers : context.numberPlayers}) :
                saveGame({lifeTotal: 20, numberPlayers : 2})
              }}
              >20</IonButton>
            </IonCol>
            <IonCol>
              <IonButton href="/life-counter/confirm" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ?
                saveGame({lifeTotal: 30, numberPlayers : context.numberPlayers}) :
                saveGame({lifeTotal: 30, numberPlayers : 4})
              }}
              >30</IonButton>
            </IonCol>
          </IonRow>
          <IonRow class="buttonRow">
            <IonCol>
              <IonButton href="/life-counter/confirm" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ?
                saveGame({lifeTotal: 40, numberPlayers : context.numberPlayers}) :
                saveGame({lifeTotal: 40, numberPlayers : 4})
              }}
              >40</IonButton>
            </IonCol>
            <IonCol>
              <IonInput class="optionTextField" color="light" placeholder="Custom"/>
              {/* TODO check output */}
              {/* <IonButton class="optionTextButton" color="tertiary">Use custom</IonButton> */}
            </IonCol>
          </IonRow>
        </IonGrid>
        )}
        </GameContextConsumer>
        {/* <IonButton class="nextButton" size="large">Next</IonButton> */}
        </IonCard>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      </GameContextProvider>
    </IonPage>
  );
};

export default LifeCounterSetLife;
