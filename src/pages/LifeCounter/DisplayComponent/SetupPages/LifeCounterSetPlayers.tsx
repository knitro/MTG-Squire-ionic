import React from 'react';
import { IonContent, IonPage, IonTitle, IonButton, IonRow, IonCol } from '@ionic/react';
import './LifeCounterSetup.css';
import FooterTabs from '../../../../components/FooterTabs/FooterTabs';
import Header from '../../../../components/Header/Header';
import { GameContextConsumer, Game, saveGame, GameContextProvider } from '../../../../states/LifeCounterSetupState';


const LifeCounterSetPlayers: React.FC = () => {
  return (

    <IonPage>
      <GameContextProvider>
      {/* Displays the Header */}
      <Header headerLabel="Life Counter - New Game"/>

      <IonContent>

        {/* Sub Header of setup pages */}
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
              Confirm
            </IonButton>
          </IonCol>
        </IonRow>

        <IonTitle class="lifeTitle">Number of Players</IonTitle>

        <GameContextConsumer>
          {(context : Game) => (
        <div>
          <IonRow class="buttonRow">
            {/* Button 1 - 1 Player */}
            <IonCol>
              <IonButton href="/life-counter/set-life" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ? //gives default for other setup values if nothing saved
                saveGame({lifeTotal: context.lifeTotal, numberPlayers : 1}) :
                saveGame({lifeTotal: 20, numberPlayers : 1})
              }}
              >1</IonButton>
            </IonCol>

            {/* Button 2 - 2 Player */}
            <IonCol>
              <IonButton href="/life-counter/set-life" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ? //gives default for other setup values if nothing saved
                saveGame({lifeTotal: context.lifeTotal, numberPlayers : 2}) :
                saveGame({lifeTotal: 20, numberPlayers : 2})
              }}
              >2</IonButton>
            </IonCol>
          </IonRow>

          <IonRow class="buttonRow">
            {/* Button 3 - 3 Player */}
            <IonCol class="buttonCol">
              <IonButton href="/life-counter/set-life" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ? //gives default for other setup values if nothing saved
                saveGame({lifeTotal: context.lifeTotal, numberPlayers : 3}) :
                saveGame({lifeTotal: 40, numberPlayers : 3})
              }}
              >3</IonButton>
            </IonCol>

            {/* Button 4 - 4 Player */}
            <IonCol class="buttonCol">
              <IonButton href="/life-counter/set-life" class="optionButton" color="tertiary"
              onClick={e => {
                context != null ? //gives default for other setup values if nothing saved
                saveGame({lifeTotal: context.lifeTotal, numberPlayers : 4}) :
                saveGame({lifeTotal: 40, numberPlayers : 4})
              }}
              >4</IonButton>
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

export default LifeCounterSetPlayers;
