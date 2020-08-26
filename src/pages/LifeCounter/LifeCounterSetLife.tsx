import React from 'react';
import { IonContent, IonPage, IonTitle, IonButton, IonRow, IonCol, IonInput } from '@ionic/react';
import './LifeCounterSetup.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { GameContextConsumer, Game, saveGame, GameContextProvider } from '../../states/LifeCounterSetupState';

const LifeCounterSetLife: React.FC = () => {
  var customLife : number = 0;

  return (

    <IonPage>
      <GameContextProvider>
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
            <IonButton class="lifeNavigationButtons" color="secondary" expand="full">
              Life Totals
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton class="lifeNavigationButtons" color="light" expand="full" href="/life-counter/confirm">
              Confirmation
            </IonButton>
          </IonCol>
        </IonRow>

        <IonTitle class="lifeTitle">Starting Life Total</IonTitle>

        <GameContextConsumer>
          {(context : Game) => (
        <>
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
            <IonCol class="buttonCol">
              <IonButton href="/life-counter/confirm" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ?
                saveGame({lifeTotal: 40, numberPlayers : context.numberPlayers}) :
                saveGame({lifeTotal: 40, numberPlayers : 4})
              }}
              >40</IonButton>
            </IonCol>
            <IonCol class="buttonColText">
              {/* <IonRow> */}
              <IonInput class="optionTextField" color="light" placeholder="Custom" type="number"
              onIonChange={e => (customLife = Number(e.detail.value!))
              }/>
              <IonButton href="/life-counter/confirm" class="optionTextButton" color="tertiary"
              onClick={e => {
                (
                // (customLife = NaN : customLife == 10 ? console.log(customLife)),
                context != null ?
                saveGame({lifeTotal: customLife, numberPlayers : context.numberPlayers}) :
                saveGame({lifeTotal: customLife, numberPlayers : 4})
                )
              }}
              >Use custom</IonButton>
              {/* <IonButton class="optionTextButton" color="tertiary">Use custom</IonButton> */}

            </IonCol>
          </IonRow>
        </>
        )}
        </GameContextConsumer>

      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      </GameContextProvider>
    </IonPage>
  );
};

export default LifeCounterSetLife;