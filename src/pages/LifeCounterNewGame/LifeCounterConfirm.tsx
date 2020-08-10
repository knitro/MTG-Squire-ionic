import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonRow, IonCol, IonGrid, IonInput, IonCard, IonLabel } from '@ionic/react';
import './LifeCounterSetup.css';
import FooterTabs from '../../components/FooterTabs/FooterTabs';
import Header from '../../components/Header/Header';
import { GameContextConsumer, Game, saveGame, GameContextProvider } from '../../LifeTotalStore';


const LifeCounterConfirm: React.FC = () => {
  return (

    <IonPage>
      <GameContextProvider>
      {/* Displays the Header */}
      <Header headerLabel="Life Counter - New Game"/>

      <IonContent>

        <IonTitle class="lifeTitle">

          Confirm<div/> 
        </IonTitle>
        <GameContextConsumer>
          {(context : Game) => (
        <IonLabel class="lifeText">
          Number of players: {context.numberPlayers}<div/>
          Starting life: {context.lifeTotal}
        </IonLabel>
        )}
      </GameContextConsumer>
      <IonButton class="lifeText">
        Start Game
      </IonButton>
      </IonContent>

      {/* Displays Tabs at the Bottom */}
      <FooterTabs/>
      </GameContextProvider>
    </IonPage>
  );
};

export default LifeCounterConfirm;
