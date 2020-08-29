import React from 'react';
import { IonContent, IonPage, IonTitle, IonButton, IonRow, IonCol, IonInput } from '@ionic/react';
import './LifeCounterSetup.css';
import FooterTabs from '../../../../components/FooterTabs/FooterTabs';
import Header from '../../../../components/Header/Header';
import { GameContextConsumer, Game, saveGame, GameContextProvider } from '../../../../states/LifeCounterSetupState';

const LifeCounterSetLife: React.FC = () => {
  var customLife : number = 0;

  return (

    <IonPage>
      <GameContextProvider>
      {/* Displays the Header */}
      <Header headerLabel="Life Counter - New Game"/>

      <IonContent>

        {/* Sub Header of setup pages */}
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
              Confirm
            </IonButton>
          </IonCol>
        </IonRow>

        <IonTitle class="lifeTitle">Starting Life Total</IonTitle>

        <GameContextConsumer>
          {(context : Game) => (
        <div>
          <IonRow class="buttonRow">
            <IonCol>

              {/* Button 1 - 20 Life */}
              <IonButton href="/life-counter/confirm" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ? //gives default for other setup values if nothing saved
                saveGame({lifeTotal: 20, numberPlayers : context.numberPlayers}) :
                saveGame({lifeTotal: 20, numberPlayers : 2})
              }}
              >20</IonButton>
            </IonCol>

            {/* Button 2 - 30 Life */}
            <IonCol>
              <IonButton href="/life-counter/confirm" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ? //gives default for other setup values if nothing saved
                saveGame({lifeTotal: 30, numberPlayers : context.numberPlayers}) :
                saveGame({lifeTotal: 30, numberPlayers : 4})
              }}
              >30</IonButton>
            </IonCol>
          </IonRow>

          <IonRow class="buttonRow">
            {/* Button 3 - 40 Life */}
            <IonCol class="buttonCol">
              <IonButton href="/life-counter/confirm" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ? //gives default for other setup values if nothing saved
                saveGame({lifeTotal: 40, numberPlayers : context.numberPlayers}) :
                saveGame({lifeTotal: 40, numberPlayers : 4})
              }}
              >40</IonButton>
            </IonCol>

            {/* Button 4 - Custom Number Life */}
            <IonCol class="buttonColText">
              {/* <IonRow> */}
              <IonInput class="optionTextField" color="light" placeholder="Custom" type="number"
              onIonChange={e => (customLife = Number(e.detail.value!))
              }/>
              <IonButton href="/life-counter/confirm" class="optionTextButton" color="tertiary"
              onClick={e => {
                (
                context != null ? //gives default for other setup values if nothing saved
                saveGame({lifeTotal: customLife, numberPlayers : context.numberPlayers}) :
                saveGame({lifeTotal: customLife, numberPlayers : 4})
                )
              }}
              >Use custom</IonButton>

            </IonCol>
          </IonRow>
        </div>
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